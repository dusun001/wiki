# Quick Start Guide

***NOTE: don’t use root account login service to complie the SDK***

# 1 SDK source code

https://drive.google.com/drive/folders/1UD5NQBumgo-Rm7zmsxyRAELx2nQHn3Tc?usp=drive_link

# 2 Untar file

```
mkdir Rockcip_Android11 
cat px30-android11.tar.gz* | tar -zx -C Rockcip_Android11 
cd Rockcip_Android11
```

# 3 One-key compliation

```
source ./build/envsetup.sh;lunch PX30_Android11-userdebug; 
./build.sh -AUKu 
```

NOTE: Install with "apt install" if there are compilation dependencies

# 4 Firmware Location

The firmware will be generated to location: rockdev/Image-PX30_Android11//update.img

# 5 Image Upgrade

## 5.1 Upgrade Tool

Upgrade tool：AndroidTool_Release_v2.69

Upgrade driver：DriverAssitant_v4.91

Use the upgrade tool, must first exe DriverInstall.exe in DriverAssitant_v4.91

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image002.jpg)

 

## 5.2  Go into Upgrade Mode by ADB Switch

1. Connect the OTG port to the burning computer USB port, it's also act as POE power supply
2. click ADB switch in AndroidTool

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image004.jpg)

 

## 5.3 Go into Upgrade Mode by Serial

1. Connect the OTG port to the burning computer USB port, it's also act as 5V power supply
2. Press "Ctrl+C" when uboot is booting up, to enter uboot:

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image006.jpg)



3. comand to reboot the board into maskrom mode, for a complete "update.img" upgrade.

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image009.jpg)

4."rockusb 0 mmc 0" command to reboot board to loader mode, for a partial firmware upgrade or a complete "update.img" upgrade.

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image011.jpg)

## 5.4 The Entire Package of Firmware "update.img" Upgrade

 

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image013.jpg)



## 5.5 Upgrade the Firmware Separately

 

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image016.jpg)

 

# 6 Start up

Plug in the USB, connect it to the USB port of the computer, and the system will start ADB after the device is started (about 1 minute)

# 7 Install total control

The software is in the current folder Total_Control_8_0_u10_install_x64.zip

 

# 8 Open total control

Open total control after system startup (be sure to open after system startup, otherwise close and restart), wait until total control apk is installed and click Connect

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image018.jpg)

 

 

# 9 Log in to the Android11 screen

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image020.jpg)

# 10 Configuration wifi

1. Open configuration

 

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image022.jpg)

 

2. Network internet

 

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image024.jpg)



 

3. Connect network

 

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image027.gif)

4. LTE

 Plugin Sim Card，LTE will autodial

5. Bluetooth

1）Click connected Devices

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image029.jpg)

2）Click Connection preferences

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image031.jpg)

3）Click Bluetooth

![image-20240106140334128](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240106140334128.png)

 

4）Click Pair new device

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image035.jpg)

 

![img](https://dusunprj.oss-us-west-1.aliyuncs.com/clip_image037.jpg)