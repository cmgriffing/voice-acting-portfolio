import type { AudioClip } from "./types";

interface AudioClipMetadata {
  name: string;
  description: string;
  reference: string;
}

export const characterAudioClipMetadata: Record<AudioClip, AudioClipMetadata> =
  {
    intro: {
      name: "Intro",
      description: "A brief introduction to the character",
      reference:
        "This intro is not specific to any particular reference but may seem inspired by several pop culture references.",
    },
    deserveToDie: {
      name: "Deserve to Die",
      description: "An emphatic declaration",
      reference:
        "Quote is taken from the film 'A Time to Kill'. The actor that says it is Samuel L. Jackson.",
    },
    tBone: {
      name: "T-Bone",
      description: "A funny epithet",
      reference:
        "Quote is taken from the film 'Tommy Boy'. The actors that say it are Brian Dennehy and Chris Farley.",
    },
  };
