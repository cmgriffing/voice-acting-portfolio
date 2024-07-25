import { z } from "astro:content";

export const AudioClips = ["intro", "deserveToDie", "tBone"] as const;
export const AudioClip = z.enum(AudioClips);
export type AudioClip = z.infer<typeof AudioClip>;
