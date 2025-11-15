/**
 * Type definitions for the Monopoly service
 *
 * @author: kvlinden
 * @date: Fall, 2025
 */

export interface Player {
  id: number;
  email: string;
  name: string;
}

export interface PlayerInput {
  email: string;
  name: string;
}

export interface Game {
  id: number;
  time: string;
}

export interface PlayerGame {
  gameID: number;
  playerID: number;
  score: number;
}

export interface PlayerGameWithDetails {
  playerID: number;
  score: number;
  name?: string;
  email?: string;
}

/**
 * Default game object for fallback scenarios
 */
export const defaultGame: Game = {
  id: 0,
  time: "Unknown",
};
