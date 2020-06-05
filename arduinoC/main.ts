enum LED {
    //% block="HIGH"
    HIGH,
    //% block="LOW"
    LOW
}
//% color="#008000"
namespace mecaduino {
    //% block="LED [LED]" blockType="command"
    //% LED.shadow="dropdown" LED.options="LED" LED.defl="LED.HIGH"
    export function LED(parameter: any, block: any) {
        let led = parameter.LED.code;
        Generator.addSetup("led.setup", `pinMode(2,OUTPUT);`);
        Generator.addCode(digitalWrite(2,${led}););
    }
