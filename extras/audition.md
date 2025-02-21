# Using QLab Audition Mode

If you'd like to be able to preview and edit QLab cues in your headphones while programming, this guide will show you how.

> This system uses the QLab feature called Audition Mode, [which you can read about here](https://qlab.app/docs/v5/tools/auditioning-cues/).

## Usage Overview

Once set up correctly, the system will allow you to do the following:

- Use a keyboard shortcut to **send QLab cues to your headphones** rather than into the theater.

- Use the console `CUE` feature to **listen to live sources** through your headphones.

- Set up the headphone system anywhere in the theater.

## Setup

> TODO details. + to add to show file or not??

1. console: create a stereo input and a stereo mix.

1. qlab: create a new I/O audition patch.

1. qlab: select your new audition patch

1. dante: patch chosen qlab channel into the new console input

1. console: route input channel to mix bus

1. console: select "no solo" as output bus

1. console: output monitor LR to dante

1. dante: route new console outputs to any wall port

1. bonus: focusrite headphone amp
