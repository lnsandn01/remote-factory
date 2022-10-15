# remote-factory
## Controling a factory via a 3D-clone in Web-XR

**!Warning!** This project needs some clean-up before it can be used.<br>
**!Warning!** This is just a prototype<br>

This is just for showcasing how you could remotely control a device connected to the internet, by interacting with a 3D-model of the device in VR.<br>
This even works with eg. the Oculus 2 hand-tracking functionality.<br>
The real device sends http requests to an api at the server with its current state attached, so that the current state can be represented in the simulation. If the simulated device has been interacted with, a http request is send to the real device, where this action is to be replicated.<br>

The **main issue** is the labor intensive process, of creating a 3D-model, and a functional model in Nodejs that represent the device or devices.<br>

This project was setup with the free prototyping webservice [Glitch.com](https://glitch.com), that has a nice WebXR integration and website builder.<br>

![alt text](machine_interaction.gif "Machine interaction in VR")
