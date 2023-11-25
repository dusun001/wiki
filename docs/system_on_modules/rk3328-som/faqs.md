# FAQs of RK3328 SoM Development  
## OS Flash  
Q: Can i flash my OS, into internal EMMC of DSOM-010R, with using USB OTG port or how?  
A: Yes, it surely can be done. You can use tool from rockchip like Android tool to carry out this procedure.  

## GPIO Pins  
Q: How can i control GPIO pins with using python,do you have any examples for it?  
A: There's a library called PiGPIO, you can kindly try with lib to control it.  

## BLE  
Q: I read that you can read up to 200 BLE devices per second.
Could you please help us understand the main limitations here ?  
A: Currently the number 200 is limited by our software to make sure the program running normally.