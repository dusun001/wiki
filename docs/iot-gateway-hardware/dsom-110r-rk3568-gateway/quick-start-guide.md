# Quick Start Guide

# **1.** **Introduction**

This Quick Start Guide explains the basics: 

- how to connect and set up your target on the network;
-  how to install the SDK; 
- how to build the firmware images. 

The Linux Software Developer’s Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun’s DSGW-290 gateway.

Base on the 4.19.232 Linux kernel, and leveraging existing open source software, the SDK simplifies the process of adding custom applications. Device drivers, GNU toolchain, Pre-defined configuration profiles, and sample applications are all in included. 

 

# **2.** Gateway Information

## 2.1  Basic information 

SOC: RK3568

 Quad-core ARM Cortex-A53

 Mali-450MP2 GPU

Power Supply: DC-12V

eMMC: 64GB

SDRAM: 8GB

## 2.2  Interface

![](https://dusunprj.oss-us-west-1.aliyuncs.com/%E5%9B%BE%E7%89%871.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/%E5%9B%BE%E7%89%8722.png)       



# **3.** Target Setup

  This section describes how to connect the gateway into your host computer and network. 

**Connecting a gateway - Power** 

1. Make sure that the power adapter is 12V/3A. 
2. Select the appropriate power plug adaptor for your geographical location. Insert it into the slot on the Universal Power Supply; then plug the power supply into an outlet. 
3. Connect the output plug of the power supply to the gateway

**Connecting a gateway – Network interface** 

1. Connect one end of the  network cable to the network port on the laptop or desktop
2. Connect the other end of network cable to the network port on the gateway. 
3. SSH login gateway  ip address，username is root passwd is root.

![](https://dusunprj.oss-us-west-1.aliyuncs.com/%E5%9B%BE%E7%89%8733.png)
 

​                     **Figure3-1. Connecting a gateway via network port**  

 

# **4.** **Compile the Environment to Build**

Please use ubuntu 18.04 .iso image to setup your build environment. You can use a virtual machine or a physical PC to install ubuntu 18.04.

## 4.1 Virtual Machine

It is recommended that novice users use virtual machines, install ubuntu 18.04 to the virtual machine, and leave enough disk space (at least 100G) for the virtual machine. 

## 4.2 Ubuntu PC Compile the Environment to Build

The use of physical machine compilation users can use a ubuntu PC.

 

# **5.** **SDK Acquisition** **a****nd Preparation**

## 5.1 Download the source code from the Dusun FTP

The source package name will be DSOM-110R.tar.gz*, get it from Dusun FTP.

## 5.2 Code Compression Package Check

The next step can be taken only after generating the MD5 value of the source compression package and comparing the MD5 value of the MD5 .txt text to confirm that the MD5 value is the same, and if the MD5 value is not the same, the energy code pack is damaged, please download it again.

 ```     
 $ md5sum DSOM-110R.tar.gz*       
 ```

## 5.3 The Source Compression Package is Unzipped

Copy the source code to the corresponding directory and unzip the source code compression package.

  ```
   $ sudo -i     
   $ mkdir workdir    
   $ cd workdir 
   $ cat DSOM-110R.tar.gz* > DSOM-110R.tar.gz
   $ tar -xvf DSOM-110R.tar.gz  
   $ cd RK3568
  ```

# **6. Code Compilation**

## 6.1 Getting started, global Compilation

### 6.1.1 Prepare the Root File System base

This section is for building  debian file system. If you want to build the *buildroot* file system, skip this section.

**Compile Debian**

Download the root file system compression package Debian.zip

The Root file system compresses the package directory：

Unzip the compression package

 ```    
 $ unzip linaro-rootfs.zip    // you get debian rootfs img
 ```

Copy the root file system to the specified path

```  
$ cd workdir/RK3568    
$ mkdir debian    
$ cp linaro-rootfs.img ./debian/
```

Change  the bulidconfig

```
$ cd workdir/RK3568  
$ export RK_ROOTFS_SYSTEM=debian 
```


###  6.1.2 Start Compiling

Build a complete directory of firmware files: rockdev/pack/AIO-3568J_Rk356x*.img and other separate images, AIO-3568J_Rk356x*.img includes all firmware for full upgrade.

```
$ ./build.sh
```

The build will take a long time, please wait patiently. 

After update.img is built, burn it to the board according to **chapter 7**.

### 6.1.3 Run The Image on the board

Connect the RK3568 board serial port to the PC via a USB to UART Bridge.

Use Putty or other Terminal software as your console tool,

SERIAL CONSOLE SETTINGS:

- 115200/8N1
-  Baud: 115200
- Data Bits: 8
- Parity Bit: No
- Stop Bit: 1

Power UP the board, you can see the boot log on console:

 ![image-20240125131110266](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240125131110266.png)

There is no default password for system login.

## 6.2 Compiled Each Image Part Separately

### 6.2.1 The build system and the image structure

The AIO-3568J_Rk356x*.img is composed of several parts. Main parts are uboot.img, boot.img, recovery.img, rootfs.img.

uboot.img contains bootloader uboot

boot.img contains the device tree .dtb image, Linux kernel image

recovery.img: The system can boot up to recovery mode, recovery.img is the rootfs used in recovery mode.

rootfs.img: The normal rootfs image. In normal mode, system boot and mount this rootfs image.



You may need to build the images separately, especially when you focus on single module (e.g. uboot or kernel driver) development. Then you can build only that part of image and update that partition in flash.

### 6.2.2 Build Uboot only

 ```
 $ ./build.sh uboot 
 ```

### 6.2.3 Build Linux Kernel Only

 ```
 $ ./build.sh kernel 
 ```

### 6.2.4 Build Recovery File System Only

 ```
 $ ./build.sh recovery
 ```

### 6.2.5 Build File System Only

 ```
 $ ./build.sh rootfs 
 ```

### 6.2.6 Final Image Packaging

```
$ ./build.sh updateimg
```

This command making rockdev/*.img scatter firmware packaging builds in the directory update.img



# 7. Driver development

## 7.1 ADC

### 7.1.2 Introduction
The RK3568 development board has two kinds of AD interface, respectively: Temperature Sensor and Successive Approximation Register. Among them:
TS-ADC (Temperature Sensor): Supports two-channel, clock frequency must be less than 800KHZ.
SAR-ADC (Successive Approximation Register): Supports six-channel single-ended 10-bit SAR-ADC. Must have a clock frequency less than 13MHZ.
The kernel uses the industrial I/O subsystem to control the ADC, which is mainly designed for AD conversion or DA conversion sensor. The following is an example of SAR-ADC using ADC fan to introduce the basic configuration method of ADC.
 
 
### 7.1.2  DTS configuration
 
#### 7.1.2.1 Configure DTS nodes
The SAR-ADC nodes of AIO-3568J defined 
in kernel/arch/arm64/boot/dts/rockchip   file, as showm below: 
```
saradc: saradc@fe720000 {
    compatible = "rockchip,rk3568-saradc", "rockchip,rk3399-saradc";
    reg = <0x0 0xfe720000 0x0 0x100>;
    interrupts = <GIC_SPI 93 IRQ_TYPE_LEVEL_HIGH>;
    #io-channel-cells = <1>;
    clocks = <&cru CLK_SARADC>, <&cru PCLK_SARADC>;
    clock-names = "saradc", "apb_pclk";
    resets = <&cru SRST_P_SARADC>;
    reset-names = "saradc-apb";
    status = "disabled";};
```

## 7.2 Camera

### 7.2.1 MIPI CSI
RK3566/RK3568 platform only has one physical mipi csi2 dphy, it can work in two modes: full mode and split mode; and split into three logical dphy: csi2_dphy0, csi2_dphy1, csi2_dphy2 

#### 7.2.1.1  Full Mode
Only use csi2_dphy0 (csi2_dphy0 and csi2_dphy1/csi2_dphy2 cannot be used at the same time);
Maximum 4 data lanes;
Maximum speed 2.5Gbps/lane;

#### 7.2.1.2  Split Mode
Use csi2_dphy1 and/or csi2_dphy2, cannot use csi2_dphy0 at this mode;
csi2_dphy1 and csi2_dphy2 can be used at the same time;
csi2_dphy1 and csi2_dphy2 both have maximum 2 data lanes;
csi2_dphy1 maps to physical dphy lane0/lane1;
csi2_dphy2 maps to physical dphy lane2/lane3;
Maximum speed 2.5Gbps/lane

![](https://dusunprj.oss-us-west-1.aliyuncs.com/%E5%9B%BE%E7%89%8744.png)

In short, if we use single-camera, we can set dphy to full mode, if we use dual-camera, we can set dphy to split mode.

### 7.2.2 Full Mode Configuration
Link path: sensor->csi2_dphy0->isp

#### 7.2.2.1  Full Mode DTS Configuration Key Points

#### 7.2.2.2  Configure Sensor
We need to check the MIPI CSI interface in schematic to find out which I2C bus is used for camera sensor. And configure the camera under that I2C node, correctly set the properties like I2C device address, pins, etc. For example, there’s a configuration for xc7160 in Core-3568:
```
&i2c4 {
        status = "okay";
        XC7160: XC7160b@1b{
                status = "okay";
                compatible = "rockchip,xc7160";
                reg = <0x1b>;
                clocks = <&cru CLK_CIF_OUT>;
                clock-names = "xvclk";
                power-domains = <&power RK3568_PD_VI>;
                pinctrl-names = "default";
                pinctrl-0 = <&cif_clk>;

                power-gpios = <&pca9555 PCA_IO0_4 GPIO_ACTIVE_LOW>;
                reset-gpios = <&pca9555 PCA_IO0_0 GPIO_ACTIVE_HIGH>;
                pwdn-gpios = <&pca9555 PCA_IO0_1 GPIO_ACTIVE_HIGH>;

                rockchip,clkout-enabled-index = <0>;
                rockchip,camera-module-index = <0>;
                rockchip,camera-module-facing = "back";
                rockchip,camera-module-name = "NC";
                rockchip,camera-module-lens-name = "NC";
                port {
                        xc7160_out: endpoint {
                                remote-endpoint = <&mipi_in_ucam4>;
                                data-lanes = <1 2 3 4>;
                        };
                };
        };
	};
```

#### 7.2.2.3  Configure Logical Dphy
csi2_dphy0 and csi2_dphy1/csi2_dphy2 cannot be used at the same time. In addition, we need to enable csi2_dphy_hw node.
```
&csi2_dphy0 {
        status = "okay";
        /*
        * dphy0 only used for full mode,
        * full mode and split mode are mutually exclusive
        */
        ports {
                #address-cells = <1>;
                #size-cells = <0>;
                port@0 {
                        reg = <0>;
                        #address-cells = <1>;
                        #size-cells = <0>;
...
                        mipi_in_ucam4: endpoint@5 {
                                reg = <5>;
                                remote-endpoint = <&xc7160_out>;
                                data-lanes = <1 2 3 4>;
                        };
                };
                port@1 {
                        reg = <1>;
                        #address-cells = <1>;
                        #size-cells = <0>;

                        csidphy_out: endpoint@0 {
                                reg = <0>;
                                remote-endpoint = <&isp0_in>;
                        };
                };
        };};
&csi2_dphy_hw {
   status = "okay";
   };
&csi2_dphy1 {
        status = "disabled";
		};
&csi2_dphy2 {
        status = "disabled";
		};
```

#### 7.2.2.4 Configure Isp
csi2_dphy0 and csi2_dphy1/csi2_dphy2 cannot be used at the same time. In addition, we need to enable csi2_dphy_hw node.
The remote-endpoint in rkisp_vir0 node should point to csidphy_out
```
&rkisp {
   status = "okay";};
&rkisp_mmu {
   status = "okay";};
&rkisp_vir0 {
   status = "okay";
   port {
      #address-cells = <1>;
      #size-cells = <0>;

      isp0_in: endpoint@0 {
         reg = <0>;
         remote-endpoint = <&csidphy_out>;
      };
   };
   };
```

### 7.2.3 Configure Isp
Link path:

sensor1->csi_dphy1->isp_vir0
sensor2->csi_dphy2->mipi_csi2->vicap->isp_vir1

#### 7.2.3.1 Split Mode DTS Configuration Key Points


#### 7.2.3.2 Configure Sensor
We need to check the MIPI CSI interface in schematic to find out which I2C bus is used for camera sensor. And configure the camera under that I2C node, correctly set the properties like I2C device address, pins, etc. For example, there’s a configuration for gc2053/gc2093 in Core-3568:
```
&i2c4 {
            status = "okay";
           gc2053: gc2053@37 { //IR
                status = "okay";
                compatible = "galaxycore,gc2053";
                reg = <0x37>;
                avdd-supply = <&vcc_camera>;
                power-domains = <&power RK3568_PD_VI>;
                clock-names = "xvclk";
                pinctrl-names = "default";
	   clocks = <&pmucru CLK_WIFI>;
                pinctrl-0 = <&refclk_pins>;
                power-gpios = <&pca9555 PCA_IO0_0 GPIO_ACTIVE_HIGH>; //IR_PWR_EN
                pwdn-gpios = <&pca9555 PCA_IO0_4 GPIO_ACTIVE_LOW>;

                rockchip,clkout-enabled-index = <1>;
                rockchip,camera-module-index = <0>;
                rockchip,camera-module-facing = "back";
                rockchip,camera-module-name = "YT-RV1109-2-V1";
                rockchip,camera-module-lens-name = "40IR-2MP-F20";
                port {
                        gc2053_out: endpoint {
                                        remote-endpoint = <&dphy1_in>;
                                        data-lanes = <1 2>;
                        };   };  };
        gc2093: gc2093b@7e{ //RGB
                status = "okay";
                compatible = "galaxycore,gc2093";
                reg = <0x7e>;
                avdd-supply = <&vcc_camera>;
                power-domains = <&power RK3568_PD_VI>;
                clock-names = "xvclk";
                pinctrl-names = "default";
                flash-leds = <&flash_led>;
                pwdn-gpios = <&pca9555 PCA_IO0_1 GPIO_ACTIVE_HIGH>;
                rockchip,clkout-enabled-index = <0>;
                rockchip,camera-module-index = <1>;
                rockchip,camera-module-facing = "front";
                rockchip,camera-module-name = "YT-RV1109-2-V1";
                rockchip,camera-module-lens-name = "40IR-2MP-F20";
                port {
                        gc2093_out: endpoint {
                                        remote-endpoint = <&dphy2_in>;
                                        data-lanes = <1 2>;
                        }; 
					}; 
				};
};
```

#### 7.2.3.3 Configure csi2_dphy1/csi2_dphy2
csi2_dphy0 and csi2_dphy1/csi2_dphy2 cannot be used at the same time.
```
&csi2_dphy0 {
         status = "disabled";
		 };
&csi2_dphy1 {
        status = "okay";
        /*
        * dphy1 only used for split mode,
        * can be used  concurrently  with dphy2
        * full mode and split mode are mutually exclusive
        */
        ports {
                port@0 {
                        reg = <0>;
                        dphy1_in: endpoint@1 {
                                        reg = <1>;
                                        remote-endpoint = <&gc2053_out>;
                                        data-lanes = <1 2>;
                        };
                };
                port@1 {
                        reg = <1>;
                        dphy1_out: endpoint@1 {
                                        reg = <1>;
                                        remote-endpoint = <&isp0_in>;
                        };
                };
        };
		};
		
&csi2_dphy2 {
        status = "okay";
        /*
        * dphy2 only used for split mode,
        * can be used  concurrently  with dphy1
        * full mode and split mode are mutually exclusive
        */
        ports {
                port@0 {
                        reg = <0>;
                        dphy2_in: endpoint@1 {
                                        reg = <1>;
                                        remote-endpoint = <&gc2093_out>;
                                        data-lanes = <1 2>;
                        };
                };
                port@1 {
                        reg = <1>;
                        dphy2_out: endpoint@1 {
                                        reg = <1>;
                                        remote-endpoint = <&mipi_csi2_input>;
                        };
                };
        };};
&csi2_dphy_hw {
      status = "okay";
	  };
&mipi_csi2 {
        status = "okay";
        ports {
                port@0 {
                        reg = <0>;
                        mipi_csi2_input: endpoint@1 {
                                        reg = <1>;
                                        remote-endpoint = <&dphy2_out>;
                                        data-lanes = <1 2>;
                        };
                };
                port@1 {
                        reg = <1>;
                        mipi_csi2_output: endpoint@0 {
                                        reg = <0>;
                                        remote-endpoint = <&cif_mipi_in>;
                                        data-lanes = <1 2>;
                        };
                };
        };
		};		
		
&rkcif_mipi_lvds {
        status = "okay";
        port {
                cif_mipi_in: endpoint {
                        remote-endpoint = <&mipi_csi2_output>;
                        data-lanes = <1 2>;
                };
        };
		};
&rkcif_mipi_lvds_sditf {
        status = "okay";
        port {
                mipi_lvds_sditf: endpoint {
                        remote-endpoint = <&isp1_in>;
                        data-lanes = <1 2>;
                };
        };
		};
```

#### 7.2.3.4 Configure Isp
The remote-endpoint in rkisp_vir0 node should point to dphy1_out
```
&rkisp {
        status = "okay";};
&rkisp_mmu {
        status = "okay";};
&rkisp_vir0 {
        status = "okay";
        port {
                isp0_in: endpoint@0 {
                        reg = <0>;
                        remote-endpoint = <&dphy1_out>;
                };
        };};
&rkcif_mipi_lvds_sditf {
        status = "okay";
        port {
                mipi_lvds_sditf: endpoint {
                        remote-endpoint = <&isp1_in>;
                        data-lanes = <1 2>;
                };
        };};
&rkisp_vir1 {
        status = "okay";
        port {
                reg = <0>;
                isp1_in: endpoint@0 {
                        reg = <0>;
                        remote-endpoint = <&mipi_lvds_sditf>;
                };
        };};
&rkcif_mmu {
    status = "okay";
	};
&rkcif {
    status = "okay";
	};
```

### 7.2.4 Related Directory
```
Linux Kernel-4.19
|-- arch/arm/boot/dts #DTS configuration file
|-- drivers/phy/rockchip
|-- phy-rockchip-mipi-rx.c #mipi dphy driver
|-- phy-rockchip-csi2-dphy-common.h
|-- phy-rockchip-csi2-dphy-hw.c
|-- phy-rockchip-csi2-dphy.c
|-- drivers/media
|-- platform/rockchip/cif #RKCIF driver
|-- platform/rockchip/isp #RKISP driver
|-- dev #includes probe, asynchronous register clock, pipeline, iommu and media/v4l2 framework
|-- capture #includes mp/sp/rawwr configuration and vb2, frame interrupt handle
|-- dmarx #includes rawrd configuration and vb2, frame interrupt handle
|-- isp_params #3A-related parameters
|-- isp_stats #3A-related statistics
|-- isp_mipi_luma #mipi luminance data statistics
|-- regs #register-related read/write operation
|-- rkisp #isp subdev and entity register
|-- csi #csi subdev and mipi configuration
|-- bridge #bridge subdev,isp and ispp interaction bridge
|-- platform/rockchip/ispp #rkispp driver
|-- dev #includes probe, asynchronous register, clock, pipeline, iommu and media/v4l2 framework
|-- stream #includes 4-channel video output configuration and  vb2, frame interrupt handle
|-- rkispp #ispp subdev and entity register
|-- params #TNR/NR/SHP/FEC/ORB parameters
|-- stats #ORB statistics
|-- i2
```

### 7.2.5 Camera Debug
Use v4l2-ctl to capture camera frame data
```
v4l2-ctl --verbose -d /dev/video0 --set-fmt-video=width=1920,height=1080,pixelformat='NV12' --stream-mmap=4 --set-selection=target=crop,flags=0,top=0,left=0,width=1920,height=1080 --stream-to=/data/out.yuv
```
Copy file out.yuv to debian to play
```
ffplay -f rawvideo -video_size 1920x1080 -pix_fmt nv12 out.yuv
```

### 7.2.6 IQ Files
Supported raw camera iq files are under external/camera_engine_rkaiq/iqfiles/isp21. What’s different from before is that iq files will no longer use .xml files but .json files. Although there is a xml to json transfer tool, isp20 xml configuration are not suitable for isp21 even after transfer.
If you need to use raw sensor camera, please be careful about is there a matchable iq file under isp21 directory.


## 7.3  CAN

### 7.3.1 Introduction
Controller area network (can) is a kind of serial communication network which can effectively support distributed control or real-time control. Can bus is a bus protocol widely used in automobile, which is designed as the communication of microcontroller in automobile environment.
Notices：The CAN FD bit filling function of RK3568 is different from the CAN FD standard protocol, and CAN FD is not recommended.
### 7.3.2 Hardware Connection
Connection between two CAN devices, only need CAN_H to CAN_H, CAN_L to CAN_L.

### 7.3.3 DTS Configuration
Common config in arch/arm64/boot/dts/rockchip/
```
&can1 {
        status = "disabled";
        compatible = "rockchip,can-1.0";
        assigned-clocks = <&cru CLK_CAN1>;
        assigned-clock-rates = <150000000>;
        pinctrl-names = "default";
        pinctrl-0 = <&can1m1_pins>;
};

&can2 {
        status = "disabled";
        compatible = "rockchip,can-1.0";
        assigned-clocks = <&cru CLK_CAN2>;
        assigned-clock-rates = <150000000>;
        pinctrl-names = "default";
        pinctrl-0 = <&can2m0_pins>;
};
```
Board  config in arch/arm64/boot/dts/rockchip/
```
&can1 {
    status = "okay";
	};
&can2 {
    status = "okay";
	}; 

```
the nodes on the hardware interface corresponding to the software are:
```
CAN2(H2、L2):can0
CAN1(H1、L1):can1
```

### 7.3.4 Communication
#### 7.3.4.1 CAN communication test
Use the “candump” and “cansend” tools directly to send and receive messages, push tool into /usr/bin/ . Tools “candump/cansend” download from Officail link or github.
```
#Close the can0 device at the transceiver
ip link set can0 down
#Set the bit rate to 250Kbps at the transceiver                    
ip link set can0 type can bitrate 250000
#Show can0 details
ip -details link show can0
#Open the can0 device at the transceiver 
ip link set can0 up
#Perform candump on the receiving end, blocking waiting for messages               
candump can0
#Execute cansend at the sending end to send the message                         
cansend can0 123#1122334455667788
```

### 7.3.5 More Command
```
1、 ip link set canX down 		//turn off CAN device
2、 ip link set canX up   		//turn on CAN device
3、 ip -details link show canX 		//show CAN device details
4、 candump canX  			//Receive data from CAN bus
5、 ifconfig canX down 			//shutdown CAn device
6、 ip link set canX up type can bitrate 250000 //Set CAN Baudrate
7、 conconfig canX bitrate + (Baudrate)
8、 canconfig canX start 		//start CAN device
9、 canconfig canX ctrlmode loopback on //loopback test
10、canconfig canX restart 		//restart CAN device
11、canconfig canX stop 		//stop CAN device
12、canecho canX 			//check CAN device status
13、cansend canX --identifier=ID+data 	//send data
14、candump canX --filter=ID:mask 	//Use the filter to receive ID matching data
```

### 7.3.6  FAQS
Summarize several problems and solutions encountered during debugging.
#### 7.3.6.1 Check if the CAN_H and CAN_L lines of the bus are loose or connected in reverse.
The receiving end only successfully received the message once, and then no longer received the message.
#### 7.3.6.2. Configuration about clock rate
#### 7.3.6.2.1. CAN
If the bitrate of CAN is 1M, it is recommended to modify the CAN clock rate to 300M to make the signal more stable. If the bitrate is lower than 1M, the clock rate can be set to 200M.

####7.3.6.3 Change clock rate
```
     status = "disabled";
        compatible = "rockchip,can-1.0";
        assigned-clocks = <&cru CLK_CAN1>;
-       assigned-clock-rates = <150000000>;
+       assigned-clock-rates = <100000000>;
        pinctrl-names = "default";
        pinctrl-0 = <&can1m1_pins>;
 
        status = "disabled";
        compatible = "rockchip,can-1.0";
        assigned-clocks = <&cru CLK_CAN2>;
-       assigned-clock-rates = <150000000>;
+       assigned-clock-rates = <100000000>;
        pinctrl-names = "default";
        pinctrl-0 = <&can2m0_pins>;
 
```
Note:
- under some clock rate frequencies, the bitrate of CAN cannot obtain accurate rate. We can adjust the assigned clock rates to solve it
- Check bitrate
```
ip -d link show can1
```

## 7.4  I2C

### 7.4.1 Introduction
AIO-3568J have 6 on-chip I2C controllers on the development board, and the usage of each I2C is shown in the table below::

This article mainly describes how to configure I2C on the development board.
Configuring I2C can be divided into two steps:
- Define and register I2C devices.
- Define and register I2C drivers.

Let’s take configuring GSL3680 as an example.

### 7.4.2 Define and register I2C devices
When registering an I2C device, the i2c_client structure is required to describe the I2C device. However, in standard Linux, users only need to provide the corresponding I2C device information, and Linux will construct the i2c_client structure based on the information provided.
The I2C device information provided by the user is written to the DTS file in the form of nodes, as shown below:
```
&i2c2 {
    status = "okay";
    clock-frequency = <100000>;
    //i2c-scl-rising-time-ns = <800>;
    //i2c-scl-falling-time-ns = <100>;
    gslx680: gslx680@41 {
        compatible = "gslX680";
        reg = <0x41>;
        screen_max_x = <800>;
        screen_max_y = <1280>;
        touch-gpio = <&gpio0 RK_PC5 IRQ_TYPE_LEVEL_LOW>;
        reset-gpio = <&gpio0 RK_PC1 GPIO_ACTIVE_HIGH>;
        flip-x = <1>;
        flip-y = <0>;
       swap-xy = <0>;
        gsl,fw = <1>;
    };
	};
```

### 7.4.3 Define and register I2C drivers
#### 7.4.3.1 Define I2C drivers
Before defining the I2C driver, the user first defines the variables of_device_id and i2c_device_id.
of_device_id is used to call the device information defined in the DTS file in the driver, which is defined as follows:
```
 static struct of_device_id gsl_ts_ids[] = {
   {.compatible = "gslX680"},
   {}
 };
```
Define i2c_device_id:
```
 static const struct i2c_device_id gsl_ts_id[] = {
    {GSLX680_I2C_NAME, 0},
    {}
 };
 MODULE_DEVICE_TABLE(i2c, gsl_ts_id);
```
i2c_driver is shown as follows:
```
 static struct i2c_driver gsl_ts_driver = {
     .driver = { .name = GSLX680_I2C_NAME,
     .owner = THIS_MODULE,
     .of_match_table = of_match_ptr(gsl_ts_ids),
     },
 #ifndef CONFIG_HAS_EARLYSUSPEND
    //.suspend  = gsl_ts_suspend,
    //.resume   = gsl_ts_resume,
 #endif
      .probe      = gsl_ts_probe,
      .remove     = gsl_ts_remove,
      .id_table   = gsl_ts_id,
 };
```

Note: id_table indicates the devices supported by the driver.

#### 7.4.3.2 Register I2C drivers
Register the I2C driver with the i2c_add_driver() function.
```
i2c_add_driver(&gsl_ts_driver);
```
When i2c_add_driver() is called to register the I2C driver, the I2C device is traversed, and the probe function of the driver is called if the driver supports the device being traversed.
#### 7.4.3.3 Send and receive data through I2C
After registering the I2C driver, I2C communication can be carried out.
Send information to slave machine:
```
 int i2c_master_send(const struct i2c_client *client, const char *buf, int count)
 {
     int ret;
     struct i2c_adapter *adap = client->adapter;
     struct i2c_msg msg;
     msg.addr = client->addr;
     msg.flags = client->flags & I2C_M_TEN;
     msg.len = count;
     msg.buf = (char *)buf;
     ret = i2c_transfer(adap, &msg, 1);
     /*
      * If everything went ok (i.e. 1 msg transmitted), return #bytes
      * transmitted, else error code.
      */
     return (ret == 1) ? count : ret;
 }
```
Read information to slave machine:
```
int i2c_master_recv(const struct i2c_client *client, char *buf, int count)
{
    struct i2c_adapter *adap = client->adapter;
    struct i2c_msg msg;
    int ret;
    msg.addr = client->addr;
    msg.flags = client->flags & I2C_M_TEN;
    msg.flags |= I2C_M_RD;
    msg.len = count;
    msg.buf = buf;
    ret = i2c_transfer(adap, &msg, 1);
    /*
    + If everything went ok (i.e. 1 msg received), return #bytes received,
    + else error code.
    */
    return (ret == 1) ? count : ret;
}
EXPORT_SYMBOL(i2c_master_recv);
```


### 7.4.4 FAQs
#### 7.4.4.1 Q1: Communication failed. How do you debug ‘log: “timeout, ipd: 0x00, state: 1”’?
A1 : Please check whether the hardware pull-up is powered.
#### 7.4.4.2 Q2: Call i2c_transfer and return -6?
A2 : A return value of -6 indicates an NACK error, that is, there is no response from the other device. This is generally a peripheral problem, which is common in the following situations:
I2C address error, the solution is to measure the I2C waveform, confirm whether I2C device address is wrong.
I2C slave device is not in normal working state, such as no power supply, wrong power on the timing sequence;
Timing does not comply with the requirements of I2C slave device will also generate Nack signal.
#### 7.4.4.3 Q3: What happens when a peripheral requires a stop signal in the middle of a read sequence rather than a repeat start signal?
A3 : At this point, i2c_transfer needs to be called twice, and I2C read needs to be split into two times. The modification is as follows:
```
static int i2c_read_bytes(struct i2c_client *client, u8 cmd, u8 *data, u8 data_len) {
    struct i2c_msg msgs[2];
	int ret;
	u8 *buffer;
	buffer = kzalloc(data_len, GFP_KERNEL);
	if (!buffer)
		return -ENOMEM;;
	msgs[0].addr = client->addr;
	msgs[0].flags = client->flags;
	msgs[0].len = 1;
	msgs[0].buf = &cmd;
	ret = i2c_transfer(client->adapter, msgs, 1);
	if (ret < 0) {
		dev_err(&client->adapter->dev, "i2c read failed\n");
        kfree(buffer);
			return ret;
    }
    msgs[1].addr = client->addr;
    msgs[1].flags = client->flags | I2C_M_RD;
    msgs[1].len = data_len;
    msgs[1].buf = buffer;
    ret = i2c_transfer(client->adapter, &msgs[1], 1);
    if (ret < 0)
		dev_err(&client->adapter->dev, "i2c read failed\n");
    else
        memcpy(data, buffer, data_len);
    kfree(buffer);
    return ret;
}
```

## 7.5 IR
### 7.5.1 Infrared remote control configuration
The configuration steps can be divided into two parts:
modify the kernel driver: kernel space changes, Linux and Android will modify this part of the content.
modify key-value mapping: user-space changes (Android system only).

### 7.5.2 Kernel driver
In the Linux kernel, the IR driver only supports NEC encoding format. Here’s how to configure the infrared remote control in the kernel.
The documents involved:
kernel/arch/arm64/boot/dts/rockchip/rk3568-evb.dtsi
kernel/drivers/input/remotectl/rockchip_pwm_remotectl.c
#### 7.5.2.1 Define related data structures
Here are the steps to define the data structure:
```
&pwm7 {
        status = "okay";

        compatible = "rockchip,remotectl-pwm";
        interrupts = <GIC_SPI 83 IRQ_TYPE_LEVEL_HIGH>;
        remote_pwm_id = <3>;
        handle_cpu_id = <1>;
        remote_support_psci = <0>;
        pinctrl-names = "default";
        pinctrl-0 = <&pwm7_pins>;

        ir_key_firefly{
                rockchip,usercode = <0xff00>;
                rockchip,key_table =
                        <0xeb   KEY_POWER>,
                        <0xec   KEY_MENU>,
                        <0xfe   KEY_BACK>,
                        <0xb7   KEY_HOME>,
                        <0xa3   KEY_WWW>,
                        <0xf4   KEY_VOLUMEUP>,
                        <0xa7   KEY_VOLUMEDOWN>,
                        <0xf8   KEY_REPLY>,
                        <0xfc   KEY_UP>,
                        <0xfd   KEY_DOWN>,
                        <0xf1   KEY_LEFT>,
                        <0xe5   KEY_RIGHT>;
        };
};
```
Note : the first column is the key value, and the second column is the key code to be responded to.
#### 7.5.2.2  How to get user code and IR key
Get the user code and key values from remotectl_do_something:
```
    case RMC_USERCODE: {
                if ((RK_PWM_TIME_BIT1_MIN < ddata->period) &&
                    (ddata->period < RK_PWM_TIME_BIT1_MAX))
                        ddata->scandata |= (0x01 << ddata->count);
                ddata->count++;
                if (ddata->count == 0x10) {
                        DBG_CODE("USERCODE=0x%x\n", ddata->scandata);
                        if (remotectl_keybd_num_lookup(ddata)) {
                                ddata->state = RMC_GETDATA;
                                ddata->scandata = 0;
                                ddata->count = 0;
                        } else {
                                if (rk_remote_print_code){
                                        ddata->state = RMC_GETDATA;
                                        ddata->scandata = 0;
                                        ddata->count = 0;
                                } else
                                        ddata->state = RMC_PRELOAD;
                        }
                }
        }
```
Note : users can print the user code using the DBG_CODE() function.
DBG_CODE printing can be enabled by using the following command:
```
echo 1 > /sys/module/rockchip_pwm_remotectl/parameters/code_print
```

#### 7.5.2.3 Compile IR driver into kernel
The steps to compile IR driver into the kernel are as follows:
(1). add the following configuration to the configuration file drivers/input/remotectl/Kconfig:
file drivers/input/remotectl/Kconfig:
```
config RK_REMOTECTL_PWM
	bool "rkxx remoctrl pwm0 capture"default n
```
(2). modify the Makefile under drivers/input/remotectl and add the following compilation options:
```
obj-$(RK_REMOTECTL_PWM)      += rk_pwm_remotectl.o
```
(3). make menuconfig is used in kernel path to select IR driver as follows:
```
Device Drivers
--->Input device support
  ----->  [*]   rkxx remotectl
  ------->[*]   rkxx remoctrl pwm0 capture.
```

After saving, execute the make command to weave the driver into the kernel.
### 7.5.3 IR use
The diagram below, it is through the waveform generated by the infrared remote Control button, mainly consists of four parts: head, Control, information, signed free, specific can consult RC6 Protocol.

![](https://dusunprj.oss-us-west-1.aliyuncs.com/%E5%9B%BE%E7%89%875.jpg)

##  7.6 LCD
### 7.6.1. Config Configuration
Under 3568 SDK, the default configuration file: kernel/arch/arm64/configs/rockchip_defconfig of Core-3568 has already set the LCD-related configuration. If you modify it yourself, please pay attention to it. The following configuration is added:
```
CONFIG_DRM_ROCKCHIP=y
CONFIG_ROCKCHIP_DW_MIPI_DSI=y
CONFIG_DRM_PANEL_SIMPLE=y
```

### 7.6.2 MIPI DTS Configuration
3568 SDK has MIPI DSI DTS file:kernel/arch/arm64/boot/dts/rockchip/rk3568-aioj-mipi101_M101014_BE45_A1.dts, this file is a MIPI_DSI0+HDMI screen configration, MIPI_DSI1 is disabled by default, we would take the dsi0 configuration as an example to introduce the related LCD driver.
#### 7.6.2.1 Pin Configuration
we can see the following statement from the DTS file:
```
/ {
    model = "AIO-3568J MIPI M101014-BE45-A1 + HDMI(Android)";
    compatible = "rockchip,rk3568-firefly-aioj-mipi", "rockchip,rk3568";
 ...
}

&route_dsi0 {
    status = "okay";
    logo,rotation = "logo_rotation_270"; //support rotation 90,180,270
    connect = <&vp1_out_dsi0>;
};

&video_phy0 {
    status = "okay";
};

&dsi0_in_vp0 {
    status = "disabled";
};

&dsi0_in_vp1 {
    status = "okay";
};

/*
 * mipi_dphy0 needs to be enabled
 * when dsi0 is enabled
 */
&dsi0 {
    status = "okay";
    //rockchip,lane-rate = <1000>;
    dsi0_panel: panel@0 {
        status = "okay";
        compatible = "simple-panel-dsi";
        reg = <0>;
        backlight = <&backlight>;

        enable-gpios = <&gpio0 RK_PC7 GPIO_ACTIVE_HIGH>;
        reset-gpios = <&gpio0 RK_PC5 GPIO_ACTIVE_LOW>;

        enable-delay-ms = <35>;
        prepare-delay-ms = <6>;
        reset-delay-ms = <25>;
        init-delay-ms = <55>;
        unprepare-delay-ms = <0>;
        disable-delay-ms = <20>;
        mipi-data-delay-ms = <200>;
        ...
        panel-init-sequence = [
            //39 00 04 B9 83 10 2E
            // 15 00 02 CF FF
            05 78 01 11
            05 32 01 29
            //15 00 02 35 00
        ];

        panel-exit-sequence = [
            05 00 01 28
            05 00 01 10
        ];
        ...
    };
};
...
&route_hdmi {
    status = "okay";
    connect = <&vp0_out_hdmi>;
};

&hdmi {
    status = "okay";
};

&hdmi_in_vp0 {
    status = "okay";
};

&hdmi_in_vp1 {
    status = "disabled";
};
...
```
The power control pins of the LCD are defined here:

NAME					GPIO		GPIO_ACTIVE
enable-gpios(LCD_EN)	GPIO0_C7	GPIO_ACTIVE_HIGH
reset_gpios(LCD_RST)	GPIO0_C5	GPIO_ACTIVE_LOW
On the hardware signal, the LCD_EN is active at high level and LCD_RST is active at low levle. Please refer to the section “GPIO Usage” for specific pin configuration. It should be noted that AIO-3568J dsi1’s LCD_EN(PCA_IO0_7), this GPIO was from PCA9555 expansion chip, which can only be controlled when the drive is running.

#### 7.6.2.2  Backlight Configuration
The backlight information is configured in the DTS file, as follows:
```
backlight: backlight {
        status = "okay";
        compatible = "pwm-backlight";
        enable-gpios = <&gpio4 RK_PC5 GPIO_ACTIVE_HIGH>;
        pwms = <&pwm4 0 50000 1>; //pwm4:PWM number   0 50000:PWM period in nanoseconds  1:polarity
        brightness-levels = <
             60  60  60  61  61  61  62  62
             62  63  63  63  64  64  64  65
             65  65  66  66  66  67  67  67
             68  68  68  69  69  69  70  70
             70  71  71  71  72  72  72  73
             73  73  74  74  74  75  75  75
             76  76  76  77  77  77  78  78
             78  79  79  79  80  80  80  81
             81  81  82  82  82  83  83  83
             84  84  84  85  85  85  86  86
             86  87  87  87  88  88  88  89
             89  89  90  91  92  93  94  95
             96  97  98  99 100 101 102 103
            104 105 106 107 108 109 110 111
            112 113 114 115 116 117 118 119
            120 121 122 123 124 125 126 127
            128 129 130 131 132 133 134 135
            136 137 138 139 140 141 142 143
            144 145 146 147 148 149 150 151
            152 153 154 155 156 157 158 159
            160 161 162 163 164 165 166 167
            168 169 170 171 172 173 174 175
            176 177 178 179 180 181 182 183
            184 185 186 187 188 189 190 191
            192 193 194 195 196 197 198 199
            200 201 202 203 204 205 206 207
            208 209 210 211 212 213 214 215
            216 217 218 219 220 221 222 223
            224 225 226 227 228 229 230 231
            232 233 234 235 236 237 238 239
            240 241 242 243 244 245 246 247
            248 249 250 251 252 253 254 255
        >;
        default-brightness-level = <200>;
    };
```
- enable-gpios: backlight enable pin, active high level.
- pwms property: use to configure pwm. in the example, default used pwm4, which period is 50000ns(20KHz), and pwm is negative.
- brightness-levels property: Generally take the value 255 as a scale, so the “general brightness-levels” is an array of 256 elements. When the PWM is set to positive polarity, the back-light is positive from 0 to 255, and the duty cycle is changed from 0% to 100%. The negative polarity of 255 to 0 bits is changed from 100% to 0%. When the PWM is set to negative polarity, the opposite is also conversed.
- default-brightness-level property: the default backlight brightness, range is frome 0 to 255.

For details, please refer to the documentation in the kernel: kernel/Documentation/devicetree/bindings/leds/backlight/pwm-backlight.txt

### 7.6.2.3  Display Timing Configuration
#### 7.6.2.3.1. Power On/Off Sequence
Usually, the power on/off sequence of MIPI screen is in the chapter “Power on/off sequence” of screen specifications. You can modify the dts according to the power on/off sequence of screen specifications. The panel node has the following attributes:
```
&dsi0 {
    status = "okay";
    //rockchip,lane-rate = <1000>;
    dsi0_panel: panel@0 {
        status = "okay";
        compatible = "simple-panel-dsi";
        ...
        enable-delay-ms = <35>;
        prepare-delay-ms = <6>;
        reset-delay-ms = <25>;
        init-delay-ms = <55>;
        unprepare-delay-ms = <0>;
        disable-delay-ms = <20>;
        mipi-data-delay-ms = <200>;
        ...
    };
};
```
The property mipi-data-delay-ms is time sequence for 10.1 inches M101014-BE45-A1 MIPI Screen, you can configure this property according to the power on / off time sequence. After the MIPI is powered on or off, it needs to send initialization or exit instructions to make it work normally. For the list of initialization and exit instructions, please refer to kernel/arch/arm64/boot/dts/rockchip/rk3568-firefly-aioj-mipi101_CZNB101862T.dts, the list is as follows:
```
&dsi0 {
	status = "okay";
	//rockchip,lane-rate = <1000>;
	dsi0_panel: panel@0 {
        ...
        panel-init-sequence = [
            15 00 02 E0 00
            15 00 02 E1 93
            15 00 02 E2 65
            15 00 02 E3 F8

            15 00 02 E0 04
            15 00 02 2D 03		
            15 00 02 E0 00
            15 00 02 80 03		
            //15 00 02 4A 35		
            15 00 02 E0 01
            15 00 02 00 00		
            15 00 02 E0 01
            15 00 02 4B 04
            //15 00 02 4A 35		
            15 00 02 00 00
            15 00 02 01 66
            //15 00 02 03 00		
            //15 00 02 04 6D
            15 00 02 17 00		
            15 00 02 18 AF
            15 00 02 19 01
            ...
        ];

        panel-exit-sequence = [
            05 05 01 28
            05 78 01 10
        ];
    };
};
```
The init-sequence and exit-sequence in the example DTS are only configured with power on/off instructions. Other initialization instructions have been burned in the IC of M101014_BE45_A1 MIPI screen. DTS does not need to configure these initialization instructions. Next, let’s take a look at the implementation of power on/off timing sequence in the driver. The specific implementation is in kernel/drivers/gpu/drm/panel/panel-simple.c:
```
static int panel_simple_disable(struct drm_panel *panel)
{
    ...
	if (p->backlight) {
		p->backlight->props.power = FB_BLANK_POWERDOWN;
		p->backlight->props.state |= BL_CORE_FBBLANK;
		backlight_update_status(p->backlight);
	}

	if (p->desc->delay.disable)
		panel_simple_sleep(p->desc->delay.disable);

	if (p->cmd_type == CMD_TYPE_MCU) {
		err = panel_simple_xfer_mcu_cmd_seq(p, p->desc->exit_seq);
		if (err)
			dev_err(panel->dev, "failed to send exit cmds seq\n");
	}
    ...
}

static int panel_simple_unprepare(struct drm_panel *panel)
{
    ...
	if (p->desc->exit_seq) {
		if (p->dsi)
			panel_simple_xfer_dsi_cmd_seq(p, p->desc->exit_seq);
		else if (p->cmd_type == CMD_TYPE_SPI)
			err = panel_simple_xfer_spi_cmd_seq(p, p->desc->exit_seq);
		if (err)
			dev_err(panel->dev, "failed to send exit cmds seq\n");
	}

	gpiod_direction_output(p->reset_gpio, 1);
	if(!p->enable_on_always){
		gpiod_direction_output(p->enable_gpio, 0);
	}
    ...
}

static int panel_simple_prepare(struct drm_panel *panel)
{
    ...
	gpiod_direction_output(p->enable_gpio, 1);

	if (p->desc->delay.prepare)
		panel_simple_sleep(p->desc->delay.prepare);

    ...
	gpiod_direction_output(p->reset_gpio, 1);

	if (p->desc->delay.reset)
		panel_simple_sleep(p->desc->delay.reset);

	gpiod_direction_output(p->reset_gpio, 0);  //Because the driver uses an API like ``gpiod`` when controlling the reset pin timing
                                                   //so, if the DTS is configured with low level active, the reset pin will be pulled high, that is reversed
	if (p->desc->delay.init)
		panel_simple_sleep(p->desc->delay.init);

	if (p->desc->init_seq) {
		if (p->dsi)
			panel_simple_xfer_dsi_cmd_seq(p, p->desc->init_seq);
		else if (p->cmd_type == CMD_TYPE_SPI)
			err = panel_simple_xfer_spi_cmd_seq(p, p->desc->init_seq);
		if (err)
			dev_err(panel->dev, "failed to send init cmds seq\n");
	}

    if(p->desc->delay.mipi_data){
        panel_simple_sleep(p->desc->delay.mipi_data);
    }
    ...
}

static int panel_simple_enable(struct drm_panel *panel)
{
    ...
	if (p->cmd_type == CMD_TYPE_MCU) {
		err = panel_simple_xfer_mcu_cmd_seq(p, p->desc->init_seq);
		if (err)
			dev_err(panel->dev, "failed to send init cmds seq\n");
	}
	if (p->desc->delay.enable)
		panel_simple_sleep(p->desc->delay.enable);

	if (p->backlight) {
		p->backlight->props.state &= ~BL_CORE_FBBLANK;
		p->backlight->props.power = FB_BLANK_UNBLANK;
		backlight_update_status(p->backlight);
	}
    ...
}
```
For Uboot, it is implemented in u-boot/drivers/video/drm/rockchip_panel.c. The implementation function is in panel_simple_unprepare、panel_simple_prepare、panel_simple_enable、panel_simple_disable, the specific implementation can be viewed by yourself.

#### 7.6.2.3.2 Display-timings
display-timings are defined in DTS:
```
    disp_timings0: display-timings {
        native-mode = <&dsi0_timing0>;
        dsi0_timing0: timing0 {
            clock-frequency = <72600000>;//<80000000>;
            hactive = <800>;//<768>;
            vactive = <1280>;
            hsync-len = <14>;   //20, 50,10
            hback-porch = <26>; //50, 56,10
            hfront-porch = <32>;//50, 30,180
            vsync-len = <8>;//4
            vback-porch = <20>;//4
            vfront-porch = <80>;//8
            hsync-active = <0>;
            vsync-active = <0>;
            de-active = <0>;
            pixelclk-active = <0>;
        };
    };
```
Generally, the relevant parameters can be found in the screen specification. As follows kernel/drivers/gpu/drm/panel/panel-simple.c, panel_simple_probe initializes the function that gets the timing sequence.
```
static int panel_simple_probe(struct device *dev, const struct panel_desc *desc){
...
 panel->base.funcs = &panel_simple_funcs;
...
}
...
static const struct drm_panel_funcs panel_simple_funcs = {
	.loader_protect = panel_simple_loader_protect,
	.disable = panel_simple_disable,
	.unprepare = panel_simple_unprepare,
	.prepare = panel_simple_prepare,
	.enable = panel_simple_enable,
	.get_modes = panel_simple_get_modes,
	.get_timings = panel_simple_get_timings,
};
```
panel_simple_get_timings was defined in kernel/drivers/gpu/drm/panel/panel-simple.c:
```
static int panel_simple_get_timings(struct drm_panel *panel, unsigned int num_timings, struct display_timing *timings)
{
	struct panel_simple *p = to_panel_simple(panel);
	unsigned int i;

	if (p->desc->num_timings < num_timings)
		num_timings = p->desc->num_timings;

	if (timings)
		for (i = 0; i < num_timings; i++)
			timings[i] = p->desc->timings[i];

	return p->desc->num_timings;
}
```
For details, please refer to the following attachments: Rockchip DRM Panel Porting Guide.pdf

### 7.6.3  EDP DTS configuration

#### 7.6.3.1  Pin Configuration
AIO-3568J SDK has EDP DSI DTS file: kernel/arch/arm64/boot/dts/rockchip/rk3568-firefly-aioj-edp_M156X40.dts, we can see the following statement from this file:
```
    vcc3v3_lcd_edp: vcc3v3-lcd-edp {
        compatible = "regulator-fixed";
        gpio = <&gpio1 RK_PB1 GPIO_ACTIVE_HIGH>;
        enable-active-high;
        regulator-name = "vcc3v3_lcd_edp";
        regulator-boot-on;
        regulator-state-mem {
        regulator-off-in-suspend;
        };
	};

    edp_panel: edp-panel {
        compatible = "simple-panel";
        status = "okay";
        power-supply = <&vcc3v3_lcd_edp>;
        enable-gpios = <&gpio1 RK_PA4 GPIO_ACTIVE_LOW>;
        //bus-format = <MEDIA_BUS_FMT_RBG888_1X24>;		
        backlight = <&backlight>;
        ...
        ports {
            panel_in_edp: endpoint {
                remote-endpoint = <&edp_out_panel>;
            };
        };
    };
    ...
};

&edp {
    status = "okay";
    hpd-gpios = <&gpio0 RK_PC2 GPIO_ACTIVE_HIGH>;
    force-hpd;

    ports {
        edp_out: port@1 {
            reg = <1>;
            #address-cells = <1>;
            #size-cells = <0>;

            edp_out_panel: endpoint@0 {
                reg = <0>;
                remote-endpoint = <&panel_in_edp>;
            };
        };
    };
};
```
The power control pins of the LCD are defined here:

NAME					GPIO		GPIO_ACTIVE
vcc3v3_lcd_edp (LCD_EN)	GPIO1_B1	GPIO_ACTIVE_HIGH
enable-gpios(BL_EN)		GPIO1_A4	GPIO_ACTIVE_LOW
hpd-gpios(EDP_HPD)		GPIO0_C2	GPIO_ACTIVE_HIGH
Please refer to the section “GPIO Usage” for specific pin configuration.

#### 7.6.3.2 Backlight Configuration
Because the backlight interface is common, you can refer to the above-mentioned MIPI configuration method.

#### 7.6.3.3  Display Timing Configuration
Different from Mipi screen, EDP screen does not have such high requirements for power on and power off timing. Of course, the configuration mainly depends on the power on and power off timing diagram of debugging screen. The example EDP screen only needs the following configuration display-timings:
```
    edp_panel: edp-panel {
        compatible = "simple-panel";
        status = "okay";
        ...
        display-timings {
            native-mode = <&timing0>;		
            timing0: timing0 {
                clock-frequency = <140000000>;
                hactive = <1920>;
                vactive = <1080>;
                hfront-porch = <40>;
                hsync-len = <40>;
                hback-porch = <80>;
                vfront-porch = <16>;
                vsync-len = <8>;
                vback-porch = <16>;
                hsync-active = <0>;
                vsync-active = <0>;
                de-active = <0>;
                pixelclk-active = <0>;
            };
        };
        ...
    };
```
display-timings are also in the kernel/drivers/gpu/drm/panel/panel-simple.c:
```
static int panel_simple_get_timings(struct drm_panel *panel, unsigned int num_timings, struct display_timing *timings)
{
	struct panel_simple *p = to_panel_simple(panel);
	unsigned int i;

	if (p->desc->num_timings < num_timings)
		num_timings = p->desc->num_timings;

	if (timings)
		for (i = 0; i < num_timings; i++)
			timings[i] = p->desc->timings[i];

	return p->desc->num_timings;
}   
```



## 7.7 Ethernet

### 7.7.1  DTS configure

#### 7.7.1.1  Common
kernel/arch/arm64/boot/dts/rockchip/rk3568-firefly-port.dtsi
```
&gmac0 {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio2 RK_PD3 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC0_RX_TX>, <&cru SCLK_GMAC0>;
        assigned-clock-parents = <&cru SCLK_GMAC0_RGMII_SPEED>, <&cru CLK_MAC0_2TOP>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac0_miim
                     &gmac0_tx_bus2
                     &gmac0_rx_bus2
                     &gmac0_rgmii_clk
                     &gmac0_rgmii_bus>;

        tx_delay = <0x3c>;
        rx_delay = <0x2f>;

        phy-handle = <&rgmii_phy0>;
        status = "disabled";
};

&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>, <&cru CLK_MAC1_2TOP>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m1_miim
                     &gmac1m1_tx_bus2
                     &gmac1m1_rx_bus2
                     &gmac1m1_rgmii_clk
                     &gmac1m1_rgmii_bus>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "disabled";
};
```

#### 7.7.1.2  Board
kernel/arch/arm64/boot/dts/rockchip/rk3568-firefly-aioj.dtsi
```
&gmac0 {
    status = "okay";
    tx_delay = <0x39>;
    rx_delay = <0x2c>;
};

&gmac1 {
    status = "okay";
    tx_delay = <0x49>;
    rx_delay = <0x28>;
};
```




## 7.8 GPIO
### 7.8.1 Introduction
GPIO (General-Purpose Input/Output) is a General pin that can be dynamically configured and controlled during software operation.The initial state of all GPIOs after power-on is input mode, which can be set as pull-up or pull-down or interrupt pin by software. The driving intensity is programmable, and the core of which is to fill the methods and parameters of GPIO bank and register them in the kernel by calling gpiochip_add.
### 7.8.2. GPIO Pin to calculate
AIO-3568J have 5 GPIO bank：GPIO0~GPIO4，Each group was numbered A0~A7, B0~B7, C0~C7, and D0~D7, the following formulas are often used to calculate GPIO Pin:
```
GPIO pin calculation formula：pin = bank * 32 + number 
GPIO group number calculation formula：number = group * 8 + X
```
For example, if we want to calculate GPIO Pin GPIO4_D5, we could refer to the following step:
bank = 4;      //GPIO4_D5 => 4, bank ∈ [0,4]
group = 3;      //GPIO4_D5 => 3, group ∈ {(A=0), (B=1), (C=2), (D=3)}
X = 5;       //GPIO4_D5 => 5, X ∈ [0,7]

number = group * 8 + X = 3 * 8 + 5 = 29
pin = bank*32 + number= 4 * 32 + 29 = 157;
GPIO4_D5 property of dts is described as :<&gpio4 29 IRQ_TYPE_EDGE_RISING>, by kernel/include/dt-bindings/pinctrl/rockchip.h macro definition ，GPIO4_D5 can also be described as :<&gpio4 RK_PD5 IRQ_TYPE_EDGE_RISING>。
```
#define RK_PA0    0
#define RK_PA1    1
#define RK_PA2    2
#define RK_PA3    3
#define RK_PA4    4
#define RK_PA5    5
#define RK_PA6    6
#define RK_PA7    7
#define RK_PB0    8
#define RK_PB1    9
#define RK_PB2    10
#define RK_PB3    11
......
```

GPIO4_D5 may be used by other funtion, here is just an example. When GPIO4_D5 pin is not reused by other peripherals, we can export this pin to use
```
# ls /sys/class/gpio/
export     gpiochip128  gpiochip32   gpiochip64  unexport
gpiochip0  gpiochip255  gpiochip500  gpiochip96
# echo 157 > /sys/class/gpio/export
# ls /sys/class/gpio/
export   gpiochip0    gpiochip255  gpiochip500  gpiochip96
gpio157  gpiochip128  gpiochip32   gpiochip64   unexport
# ls /sys/class/gpio/gpio157
active_low  device  direction  edge  power  subsystem  uevent  value
# cat /sys/class/gpio/gpio157/direction
in
# cat /sys/class/gpio/gpio157/value
0
```



## 7.9. LED
### 7.9.1  Introduction
There are 2 LEDs on the Core-3568J development board, as the following table shows:

LED	   Pin name	  Pin number
Blue	GPIO0_C0	16
Yellow	PCA_IO1_2	510

PCA_IO1_2 is derived from the GPIO extension chip.

Both LEDs can be controlled by using the LED device subsystem or by directly operating GPIO.

### 7.9.2  Controlling LEDs by device
Linux has its own LED subsystem for LED devices. In Core-3568J, 2 LEDs are configured as LED class devices.

You can control them via /sys/class/leds/.

The default status of the two on-board leds are:

- Blue: Turn on after the system powers on.
- Yellow: defined by user.

You can change the behavior of each LED by using the echo command to write command to its brightness property:
```
# echo 0 >/sys/class/leds/firefly:blue:power/brightness  //Blue led off
# echo 1 >/sys/class/leds/firefly:blue:power/brightness  //Blue led on
```

### 7.9.3  Using trigger control LED
Trigger contains a variety of ways to control the LED, here with two examples to illustrate.

- Simple trigger LED
- Complex trigger LED

For more information, please read the document leds-class.txt.

First of all, we need to know how many LED definition, while the corresponding property of the LED is.

Define LED node in file kernel/arch/arm64/boot/dts/rockchip/rk3568-firefly-aioj.dtsi

```
leds: leds {
	status = "okay";
	compatible = "gpio-leds";

	power_led: power {
		label = "firefly:blue:power";
		linux,default-trigger = "ir-power-click";
		default-state = "on";
		gpios = <&gpio0 RK_PC0 GPIO_ACTIVE_HIGH>;
		pinctrl-names = "default";
		pinctrl-0 = <&led_power>;
	};

	user_led: user {
		label = "firefly:yellow:user";
		linux,default-trigger = "ir-user-click";
		default-state = "off";
		gpios = <&pca9555 PCA_IO1_2 GPIO_ACTIVE_LOW>;
	};
};
```
Note: The value of compatible must match the one in drivers/leds/leds-gpio.c.

#### 7.9.3.1 Simple trigger LED
It is a simple trigger mode to control LEDs, as follows on the default open yellow LED. And Core-3568J’s yellow LED will be turned on after boot.

(1) Defined LED trigger In the kernel/drivers/leds/trigger/led-firefly-demo.c add the following:
```
DEFINE_LED_TRIGGER(ledtrig_default_control);
```
(2) Register the trigger.
```
led_trigger_register_simple("ir-user-click", &ledtrig_default_control);
```
(3) Control the LED.
```
led_trigger_event(ledtrig_default_control, LED_FULL);     #yellow led on
```


#### 7.9.3.2  Complex trigger LED
The following is the trigger mode control LED complex example, timer trigger is to let the LED to achieve constant light off effect.

We need to configure the timer trigger on the kernel.

In the kernel path using make menuconfig, in accordance with the following method to chose timer trigger driver.
```
Device Drivers
--->LED Support
   --->LED Trigger support
      --->LED Timer Trigger
```	  
Save the configuration and compile the kernel, the kernel.img burn Core-3568J board. We can use the serial input command, you can see the blue light non-stop interval flashing.
```
echo "timer" > sys/class/leds/firefly\:blue\:power/trigger
```
The user can also use the cat command to get the available values for the trigger:
```
root@dusun:/ # cat sys/class/leds/firefly\:blue\:power/trigger
none rc-feedback test_ac-online test_battery-charging-or-full test_battery-charging
test_battery-full test_battery-charging-blink-full-solid test_usb-online mmc0 mmc1
ir-user-click [timer] heartbeat backlight default-on rfkill0 mmc2 rfkill1 rfkill2
```



## 7.10 PWM
### 7.10.1 Introduction
This chapter describes how to configure PWM.

The PWM driver of AIO-3568J is kernel/drivers/pwm/pwm-rockchip.c

### 7.10.2  DTS configure
There are three main steps to configure PWM: configure PWM DTS node, configure PWM kernel driver and control PWM device.

#### 7.10.2.1  Configure PWM DTS node
Add the PWM DTS configuration in the DTS source file in kernel/arch/arm64/boot/dts/rockchip/, as shown below:
```
pwm_demo: pwm_demo {
        status = "disabled";
        compatible = "firefly,rk356x-pwm";
        pwms = <&pwm1 0 10000 1>;   //pwm1:PWM number   0 10000:PWM period in nanoseconds  1:polarity
        duty_ns = <5000>;   //pwm duty cycle activation time, unit ns
    };
```
pwms : number of PWM channels to be applied.

duty_ns : duty cycle activation time of PWM, unit ns.

### 7.10.3  Interface specification
Users can use the PWM nodes generated by the above steps in other driver files. The specific methods are as follows:

(1) The following header files are included in the device driver files that need to be controlled by PWM :
```
#include <linux/pwm.h>
```
This header file mainly contains the PWM function interface.

(2) Apply PWM

Using:
```
struct pwm_device *pwm_request(int pwm_id, const char *label);
```
Function to apply for PWM. Such as:
```
struct pwm_device * pwm1 = NULL;pwm0 = pwm_request(1, “firefly-pwm”);
```
(3) Configue PWM

Using:
```
int pwm_config(struct pwm_device *pwm, int duty_ns, int period_ns);
```
Configure the duty cycle of PWM, for example:
```
pwm_config(pwm0, 500000, 1000000);
```
(4) Enable the PWM function
```
int pwm_enable(struct pwm_device *pwm);
```
Used to enable PWM, for example:
```
pwm_enable(pwm0);
```
(5) Control PWM output mainly uses the following interface functions:

function: Used to apply for PWM
```
struct pwm_device *pwm_request(int pwm_id, const char *label);
```
function: Used to release the PWM requested
```
void pwm_free(struct pwm_device *pwm);
```
function: Used to configure the duty cycle of PWM
```
int pwm_config(struct pwm_device *pwm, int duty_ns, int period_ns);
```
function: Enable PWM
```
int pwm_enable(struct pwm_device *pwm);
```
function: Ban PWM
```
void pwm_disable(struct pwm_device *pwm);
```

### 7.10.4 Debug method
Check PWM registration status through the rich debug interface of the kernel, adb shell or serial port to enter the android terminal and execute:
```
cat /sys/kernel/debug/ PWM
```
To see if the registration was successful, the interface name and register address are returned.

### 7.10.5  FAQs
Q1: Pwm could not register successfully ?

A1:

- whether the DTS configuration file opens the corresponding PWM.
- whether the IO port where PWM is located is occupied by other resources, you can check the reason according to the error return value.


## 7.11 RTC
### 7.11.1 Introduction
AIO-3568J development BOARD uses HYM8563 as RTC(Real Time Clock), HYM8563 is a low power CMOS real-time Clock/calendar chip, it provides a programmable Clock output, an interrupt Output and a power down detector, all addresses and data are passed serially through the I2C bus interface.The maximum bus speed is 400Kbits/s, after each read and write data, the embedded word address register will automatically increment

- Timing can be based on 32.768kHz crystals in seconds, minutes, hours, weeks, days, months and years
- Wide working voltage range :1.0~5.5V
- Low resting current: Typical 0.25μA(VDD =3.0V, TA =25°C)
- Internal integrated oscillating capacitor
- drain open circuit interrupt pin

### 7.11.2  RTC driver

### 7.11.3  Interface usage
Linux provides three user-space call interfaces. The corresponding path in the AIO-3568J development board is:

- SYSFS Interface : /sys/class/rtc/rtc0/
- PROCFS Interface : /proc/driver/rtc
- IOCTL Interface : /dev/rtc0

#### 7.11.3.1 SYSFS Interface
You can directly use the interface below cat and echo operations /sys/class/rtc/rtc0/.

For example, check the date and time of the current RTC:
```
# cat /sys/class/rtc/rtc0/date
2013-01-18
# cat /sys/class/rtc/rtc0/time
09:36:10
```
Set the startup time, such as starting up after 120 seconds:
```
#Start the machine regularly after 120 seconds
echo +120 >  /sys/class/rtc/rtc0/wakealarm
# View boot time
cat /sys/class/rtc/rtc0/wakealarm
#To turn it off
reboot -p
```

#### 7.11.3.2 PROCFS Interface
Print RTC related information:
```
# cat /proc/driver/rtc
rtc_time        : 09:34:59
rtc_date        : 2013-01-18
alrm_time       : 08:52:45
alrm_date       : 2013-01-18
alarm_IRQ       : no
alrm_pending    : no
update IRQ enabled      : no
periodic IRQ enabled    : no
periodic IRQ frequency  : 1
max user IRQ frequency  : 64
24hr            : yes
```


#### 7.11.3.3  IOCTL Interface
You can use ioctl to control /dev/rtc0.

Please refer to the document kernel/Documentation/rtc.txt for detailed instructions.

### 7.11.4. FAQs
#### 7.11.4.1. Q1: The time is out of sync after the development board is powered on ?
A1 : Check that the RTC battery is properly connected



## 7.12  UART
## 7.12.1 Introduction
AIO-3568J supports UART、RS232、RS485 interfaces

- UARTx2
- RS485x2
- RS232x2

The RS232 of the board is extended from RK3568 uart3 and uart4, whereas the interfaces UART and RS485 of the board are extended from SPI bridge/extension chip WK2124.

SPI bridge/extension chip WK2124 with functions of four enhanced serial ports (UART), among them:

- the baud rate, word length and check format of each subchannel UART can be set independently, and the maximum communication rate of 2Mbps can be provided
- each sub-channel has 256 BYTE FIFO, which can be programmed according to user requirements.
- has a subserial port to receive FIFO timeout interrupts.
- supports start bit error detection.

The serial interface diagram of the AIO-3568J development board is as follows:

  _images/uart_interface.jpg

## 7.12.2  DTS configuration
File kernel/arch/arm64/boot/dts/rockchip/rk3568-firefly-port.dtsi has the definition of spi to uart related nodes:
```
&spi1 {
        status = "disabled";
        max-freq = <48000000>;
        dev-port = <0>;
        pinctrl-0 = <&spi1m1_pins>;
        pinctrl-1 = <&spi1m1_pins_hs>;

        spi_wk2xxx: spi_wk2xxx@00{
                status = "disabled";
                compatible = "firefly,spi-wk2xxx";
                reg = <0x00>;
                spi-max-frequency = <10000000>;
                power-gpio = <&pca9555 PCA_IO1_7 GPIO_ACTIVE_HIGH>;
                reset-gpio = <&pca9555 PCA_IO1_1 GPIO_ACTIVE_HIGH>;
                irq-gpio = <&gpio0 RK_PA6 IRQ_TYPE_EDGE_FALLING>;
                cs-gpio = <&gpio3 RK_PA1 GPIO_ACTIVE_HIGH>;
        };
};
```
As you can see, enabling the node in the kernel/arch/arm64/boot/dts/rockchip/firefly-rk3568-aioj.dtsi file is available. In addition, SPI1 node needs to be enabled because SPI to UART serial port module used by our board is attached to SPI1. As follows:
```
&uart3 {
        status = "okay";
};

&uart4 {
        status = "okay";
};

&spi1 {
        status = "okay";
};

&spi_wk2xxx {
        status = "okay";
};
```
After the serial port is configured, the nodes on the hardware interface corresponding to the software are:
```
RS485_1：  /dev/ttysWK0
RS485_2：  /dev/ttysWK1
UART1：    /dev/ttysWK2
UART2：    /dev/ttysWK3
RS232_1 :  /dev/ttyS3
RS232_2:   /dev/ttyS4
```
## 7.12.3  PINs Definition
RS232_images/AIO-3568J_RS232_pins.jpg


RS485_images/AIO-3568J_RS485_pins.jpg

UART _images/AIO-3568J_uart_pins.jpg

## 7.12.4  Debug method
Users can send and receive data to the serial port of the development board by using the USB to serial port adapter of different host according to different interfaces. For example, the debugging steps of RS485 are as follows:

(1) Connected hardware

Connect A, B and GND pins of development board RS485 with A, B and GND pins of host serial port adapter (USB to 485 to serial port module) respectively.

(2) Open the serial terminal of the host

Input the install Kermit command sudo apt install Kermit on the terminal. After the installation, open Kermit, set the baud rate and connect:
```
$ sudo kermit
C-Kermit> set line /dev/ttyUSB0
C-Kermit> set speed 9600
C-Kermit> set flow-control none
C-Kermit> connect
```
- /dev/ttyUSB0 is the device file for USB to serial port adapter.

(3) Send data to host serial port adapter

The device file for RS485 is /dev/ttysWK0. Run the following commands on the device:
```
echo  RS485 test... > /dev/ttysWK0
```
The serial terminal in the host can receive a string: “ RS485 test… “

(4) Receive data from host serial port adapter

First run the following commands on the device:
```
cat /dev/ttysWK0
```
Then enter a string at the host’s serial terminal:  RS485 test..., the device side can see the same string.

(5) Exit kermit connection

The host hit keyboard ctrl+\ and then hit key c, input “exit” and hit enter
```
C-Kermit>exit
OK to exit? ok
```





# 9. Image Upgrade

## 9.1 Upgrade Tool

Upgrade tool：AndroidTool_Release_v2.84.

## 9.2 Go into Upgrade Mode

1. Connect the OTG port to the burning computer USB port, it's also act as 12V power supply
2. Press "reboot loader" when ssh login:

```
root@dusun:~# reboot loader
```

3. system  reboot the board into LOADER mode, for a complete "update.img" upgrade.

![image-20240125133936212](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240125133936212.png)

## 9.3 The Entire Package of Firmware "XXX*.img" Upgrade

 ![image-20240125133942022](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240125133942022.png)

## 9.4 Upgrade the Firmware Separately

 ![image-20240125133947890](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240125133947890.png)

