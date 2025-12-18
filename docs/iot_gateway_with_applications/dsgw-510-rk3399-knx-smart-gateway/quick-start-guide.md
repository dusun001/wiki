
# 1.Introduction

This Quick Start Guide explains the basics: <br />
- how to connect and set up your target on the network <br />
- how to install the SDK <br />
- how to modify and build the firmware images <br />
The Linux Software Developer’s Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun’s DSGW-510 Industrial control board. <br />


# 2.Baseboard Information

This section describes the baseboard’s basic resource infomation and interfaces.<br />

## 2.1 Peripherals & Interfaces

| **Category**             | **Specifications**                                                  |
| :----------------------- | :------------------------------------------------------------------ |
| Master                   | RK3399,  dual-core Cortex-A72 andquad-core Cortex-A53               |
| DDR                      | D4GB                                                                |
| RAM                      | 32GB                                                                |
| SYSTEM                   | Debian 12                                                           |
| WIFI                     | BL-M8821CU1 Modules                                                 |
| ZIGBEE/ZWAVE             | USB Type-C 5V/3A                                                    |
| LTE                      |  EC25EUX                                                            |
| Ethernet                 | 2-way，1000M                                                        |
| RS485                    | 2-way                                                               |
| RS232                    | 1-way                                                               |
| RS232                    | 1-way                                                               |
| MBUS                     | 1-way                                                               |
| KNX                      | 1). Power & battery LED 2).  Wireless LED 3）LTE indicator          |
| USB                      | 3-way，2*USB3.0 TYPEA、1*Micro PRO  ( 1-way USB3.0 TYPEA and Micro PRO Multiplex one USB2.0 bus, default is Micro PRO)                                                 |
| HDMI                     | 1-way                                                               |
| KEY                      | 2-way ，1*USER KEY、1*RESET KEY                                     |
| LED                      | 6*LED（LED_PWR1、LED1、LED_4G、LED_WIFI、LED_ ZIGBEE、KNX_PROG_LED） |
| RTC                      | 1-way                                                               |
| Power supply mode        | DC 6 ~ 30V                                                          |


## 2.2 Appearance

### 2.2.1 Main board

Front:<br />

![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/1.png)

Back:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/2.png)


### 2.2.2 Interface board

Front:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/3.png)

Back:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/4.png)

### 2.2.3 RF board

Front:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/5.png)

Back:<br />
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/6.png)


![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/7.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/8.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/9.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/10.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/11.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/12.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/13.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/14.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/15.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/16.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/17.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/18.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/19.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/20.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/21.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/22.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/23.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/24.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/25.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/26.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/27.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/28.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/29.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/30.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/31.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/32.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/33.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/34.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/35.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/36.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/37.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/38.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/39.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/40.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/41.png)
![pic](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSGW-510-KNX/42.png)





