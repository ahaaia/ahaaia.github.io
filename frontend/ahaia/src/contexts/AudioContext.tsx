'use client';

/**
 * AudioContext.tsx
 * 
 * Global audio context that manages audio playback across the entire application.
 * Ensures only one audio can play at a time and provides controls for playing,
 * pausing, and stopping audio playback.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface AudioContextType {
  currentAudio: HTMLAudioElement | null;
  currentPodcastId: string | null;
  isPlaying: boolean;
  playAudio: (audio: HTMLAudioElement, podcastId: string) => void;
  pauseAudio: () => void;
  stopAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [currentPodcastId, setCurrentPodcastId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Handle audio ended event
  useEffect(() => {
    if (currentAudio) {
      const handleEnded = () => {
        setIsPlaying(false);
      };
      
      currentAudio.addEventListener('ended', handleEnded);
      
      return () => {
        currentAudio.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentAudio, setIsPlaying]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.src = '';
        setCurrentAudio(null);
        setCurrentPodcastId(null);
        setIsPlaying(false);
      }
    };
  }, [currentAudio]);

  // Play audio function - memoized with useCallback for performance
  const playAudio = useCallback((audio: HTMLAudioElement, podcastId: string) => {
    // Prevent race conditions by ensuring we're not in the middle of another operation
    if (currentAudio && currentAudio !== audio) {
      // Properly clean up the current audio before switching
      try {
        // First pause the current audio
        currentAudio.pause();
        
        // Remove the src attribute to cancel any pending network requests
        // This prevents the "fetching process aborted" error
        const oldSrc = currentAudio.src;
        currentAudio.src = '';
        currentAudio.load(); // Force the browser to acknowledge the src change
        
        // Reset time after src is cleared to avoid additional network requests
        currentAudio.currentTime = 0;
        
        console.log(`Cleaned up previous audio: ${oldSrc}`);
      } catch (e) {
        console.warn('Error during audio cleanup:', e);
      }
    }

    // Set the new audio as current
    setCurrentAudio(audio);
    setCurrentPodcastId(podcastId);

    // Play the new audio with proper error handling
    const playPromise = audio.play();
    
    // Handle the play promise properly
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          // Handle different error types
          if (error.name === 'AbortError') {
            console.log('Play request was aborted, likely due to navigation or user action');
          } else if (error.name === 'NotAllowedError') {
            console.log('Play request was interrupted by a new play request');
          } else {
            console.error('Error playing audio:', error);
          }
          setIsPlaying(false);
        });
    } else {
      // For browsers that don't return a promise
      setIsPlaying(true);
    }
  }, [currentAudio]);

  // Pause audio function - memoized with useCallback for performance
  const pauseAudio = useCallback(() => {
    if (currentAudio) {
      currentAudio.pause();
      setIsPlaying(false);
    }
  }, [currentAudio]);

  // Stop audio function - memoized with useCallback for performance
  const stopAudio = useCallback(() => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
      setCurrentAudio(null);
      setCurrentPodcastId(null);
    }
  }, [currentAudio]);

  // Context value memoized to prevent unnecessary re-renders
  const contextValue = React.useMemo(() => ({
    currentAudio,
    currentPodcastId,
    isPlaying,
    playAudio,
    pauseAudio,
    stopAudio
  }), [currentAudio, currentPodcastId, isPlaying, playAudio, pauseAudio, stopAudio]);

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
}

/**
 * Custom hook to access the audio context.
 * Must be used within an AudioProvider component.
 */
export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
