A robot can see an object and still grip it badly. Contact adds information that a camera alone cannot supply: whether a surface is pressing back, whether a grip is changing or whether something has damaged the covering. Electronic skin aims to make that information available across a soft surface. “Human touch” describes the engineering inspiration, not proof of human-like experience.

## What is electronic skin?

Electronic skin is a flexible sensing system that converts physical inputs into electrical information. Different designs detect pressure, deformation or temperature through different mechanisms. The important chain is contact, measurement, interpretation and response. A sensor covering is useful only when the robot can turn its readings into a suitable action. [UCL, electronic skin research account (2025)](https://www.ucl.ac.uk/news/2025/jun/improved-electronic-skin-gives-robots-human-touch)

## A whole surface can become the sensor

In 2025, Cambridge and UCL researchers reported a single-layer soft sensory skin using electrical impedance tomography. Rather than placing a separate device at every contact point, their approach reads electrical changes through a conductive material. The Science Robotics paper describes a method for structuring this distributed information into useful sensory signals. [Hardman, Thuruthel and Iida, Science Robotics (2025)](https://www.science.org/doi/10.1126/scirobotics.adq2303)

The team cast a conductive gelatine-based hydrogel into a hand shape, with 32 electrodes at the wrist. They tested pressing, gentle contact, heating and cutting, then trained a machine-learning model on the resulting patterns. The electrode count is not a count of human-like receptors. The system learns how many changing electrical measurements relate to particular tested inputs. [University of Cambridge, single-material robotic skin (2025)](https://www.cam.ac.uk/stories/robotic-skin)

## Why the learning matters

One electrical change can have several possible causes. A flexible covering may stretch, warm up or experience pressure, sometimes together. The model has to distinguish patterns rather than treat every variation as the same event. That makes training conditions important: recognising familiar laboratory contacts does not automatically demonstrate reliable performance on every object, temperature or damaged surface.

An illustrative control task is holding something fragile. Sensing contact could help a controller adjust its grip as conditions change. But useful feedback requires more than a sensitive material: calibration, response time, repeatability and a dependable link to the robot’s movement all matter. This is a design example, not a claim that the cited hand solved every fragile-object grasping task.

## Robotic sensing and biological sensation are different problems

Stanford researchers demonstrated another approach in 2023: soft integrated electronics that convert stimuli into nerve-like electrical pulses. That work addresses a different part of the sensing chain. A robot controller interpreting signals and a biological nervous system receiving them are not interchangeable. Prospective prosthetic applications require their own evidence; an electronic skin demonstration does not establish restored sensation in a human patient. [Stanford University, nerve-like electronic skin (2023)](https://news.stanford.edu/stories/2023/05/soft-e-skin-talks-brain)

## What would make the next step convincing?

The practical test is a skin that keeps useful measurements while it bends, ages and operates outside a carefully arranged bench experiment. The Cambridge team identifies durability and real-world robotic tasks as areas for further work. Our [brain-interface explainer](/articles/brain-to-voice-ai-speech-brain-computer-interfaces/) describes a related but distinct challenge in translating signals. The AI hero here is a concept, not a documented glowing prototype.

Related reading: [The wider robot revolution](/articles/robot-revolution-ai-future-2030/).
