# Quick Start Guide
# Revision History
|  Rev           | Date       | Sect. | Upgrade Description | By |
| ------------   | -----      |-------| ------------        |----|
| 1.0           | 2024-08-17  |       | New Version Release | au |


# 1. Introduction
This Quick Start Guide explains the basics:
 - how to connect and set up your target on the network
 - how to install the SDK
 - how to modify and build the firmware images

The Linux Software Developer's Kit (SDK) is an embedded hardware and software suite that enables Linux developers to create applications on Dusun's `DSOM-130N` Module.


# 2. Baseboard Information
This section describes the baseboard's basic resource infomation and interfaces.

## 2.1 Basic information
- 1 core interface，support I.MX8MP core
- 2 1Gbps Ethernet(LAN+WAN)
- 1 mipi lcd
- 1 LVDS
- 3 Led
- 1 Fan
- 1 Button
- 2 USB 3.0
- 1 Ble
- 1 Subg
- 2 can
- 1 TF Card
- 1 User Key
- 1 Audio(HP + LINE)
- 2 MIPI CSI1 Camera
- 1 Debug
- 1 LTE (4G)


## 2.2 Interface
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/2-2-1.png)
# 3. Debug Setup
This section describes how to connect the board into your host computer and network to debug for development.

## 3.1 Power

- Make sure that the power adapter is `12V/2A`.
- Select the appropriate power plug adaptor for your geographical location. Insert it into the slot on the Universal Power Supply; then plug the power supply into an outlet.
- Connect the output plug of the power supply to the gateway

## 3.2 Wire Connect
Connect gateway to a router for login
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/3-2-1.png)

## 3.3 Debug Uart Connect
- Before you set up your development test bed, please connect the PCB serial port to your develop PC via USB-to-serial bridge.

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/3-3-1.png)

- PCB serial port on Gateway

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/3-3-2.png)
```shell
USB-to-serial bridge. Serial port setting:
Baud rate: 115200
Bits: 8
Stop Bits: 1
Hardware flow control: None
```

# 4. SDK Download And Compile
This section describes how to download the sdk and compile it.

## 4.1 SDK Envirment Prepare
Compilation environment: 20.04.5 LTS (Focal Fossa)/Docker version 24.0.6

## 4.2 SDK Download
Get the source code from Dusun FTP server uncompress it under your work directory.

Downloads SDK: [DSOM-130N-DB-SDK](https://drive.google.com/drive/folders/1l3L-7sdstCYwOFC75FICaZoPVkIMOlU_?usp=drive_link
) 


## 4.3 SDK Compile

- run `build.sh`
```shell
sudo docker import ./DSOM-130N_sdk-docker_AV1.0.0.2.tar.gz dsom130n /bin/bash
sudo docker run -id --name dsgw130n dsgw130n
sudo docker exec -it dsgw130n  /bin/bash
cd /home/work/
# build kernel
./build.sh kernel
# build firmware
./build.sh mkfw
```

## 4.4 SDK Output
- `update.img` is  burn image
- `fw.bin` is the update firmware
```shell
root@8fab565785dd:/home/work# ls ./output/ -alh
total 1.9G
drwxr-xr-x 2 root root 4.0K Nov 28 09:00 .
drwxr-xr-x 1 root root 4.0K Nov 28 04:19 ..
-rw-r--r-- 1 root root 749M Nov 28 02:16 fw.bin
-rw-r--r-- 1 root root 1.2G Nov 28 02:16 update.img
```

# 5. Firmware Program And Program

## 5.1 Firmware Program

### 5.1.1 USB OTG

- download `uuu.rar`
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/5-1.png)

- open cmd line at `uuu` directory
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/5-2.png)
![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/5-3.png)

- execute burn command
```shell
uuu.exe -b emmc_all imx-boot_2G.bin update.img
```

- connect the board to computer and switch to usb mode 
Hold the `BOOT` Key and click the `reset` button

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/5-4.png)





- burn success log

```shell
E:\111\351\UUU>uuu.exe -b emmc_all imx-boot_2G.bin update.img
uuu (Universal Update Utility) for nxp imx chips -- libuuu_1.4.139-0-g1a8f760

Your console don't support VT mode, fail back to verbose mode
Build in config:
        Pctl     Chip            Vid     Pid     BcdVersion
        ==================================================
        SDPS:    MX8QXP          0x1fc9  0x012f  [0x0002..0xffff]
        SDPS:    MX8QM           0x1fc9  0x0129  [0x0002..0xffff]
        SDPS:    MX8DXL          0x1fc9  0x0147
        SDPS:    MX28            0x15a2  0x004f
        SDPS:    MX815           0x1fc9  0x013e
        SDPS:    MX865           0x1fc9  0x0146
        SDPS:    MX8ULP          0x1fc9  0x014a
        SDPS:    MX8ULP          0x1fc9  0x014b
        SDP:     MX7D            0x15a2  0x0076
        SDP:     MX6Q            0x15a2  0x0054
        SDP:     MX6D            0x15a2  0x0061
        SDP:     MX6SL           0x15a2  0x0063
        SDP:     MX6SX           0x15a2  0x0071
        SDP:     MX6UL           0x15a2  0x007d
        SDP:     MX6ULL          0x15a2  0x0080
        SDP:     MX6SLL          0x1fc9  0x0128
        SDP:     MX7ULP          0x1fc9  0x0126
        SDP:     MXRT106X        0x1fc9  0x0135
        SDP:     MX8MM           0x1fc9  0x0134
        SDP:     MX8MQ           0x1fc9  0x012b
        SDPU:    SPL             0x0525  0xb4a4  [0x0000..0x04ff]
        SDPV:    SPL1            0x0525  0xb4a4  [0x0500..0x9998]
        SDPU:    SPL             0x0525  0xb4a4  [0x9999..0x9999]
        SDPU:    SPL             0x3016  0x1001  [0x0000..0x04ff]
        SDPV:    SPL1            0x3016  0x1001  [0x0500..0x9998]
        FBK:                     0x066f  0x9afe
        FBK:                     0x066f  0x9bff
        FB:                      0x0525  0xa4a5
        FB:                      0x18d1  0x0d02
        FB:                      0x3016  0x0001

Run built-in script:

uuu_version 1.2.39

# This command will be run when i.MX6/7 i.MX8MM, i.MX8MQ
SDP: boot -f imx-boot_2G.bin

# This command will be run when ROM support stream mode
# i.MX8QXP, i.MX8QM
SDPS: boot -f imx-boot_2G.bin

# These commands will be run when use SPL and will be skipped if no spl
# SDPU will be deprecated. please use SDPV instead of SDPU
# {
SDPU: delay 1000
SDPU: write -f imx-boot_2G.bin -offset 0x57c00
SDPU: jump
# }

# These commands will be run when use SPL and will be skipped if no spl
# if (SPL support SDPV)
# {
SDPV: delay 1000
SDPV: write -f imx-boot_2G.bin -skipspl
SDPV: jump
# }


FB: ucmd setenv fastboot_dev mmc
FB: ucmd setenv mmcdev ${emmc_dev}
FB: ucmd mmc dev ${emmc_dev}
FB: flash -raw2sparse all update.img
FB: flash bootloader imx-boot_2G.bin
FB: ucmd if env exists emmc_ack; then ; else setenv emmc_ack 0; fi;
FB: ucmd mmc partconf ${emmc_dev} ${emmc_ack} 1 0
FB: done


Wait for Known USB Device Appear...
New USB Device Attached at 1:7
1:7>Start Cmd:SDPS: boot -f imx-boot_2G.bin
100%1:7>Okay (5.645s)
New USB Device Attached at 1:7
1:7>Start Cmd:FB: ucmd setenv fastboot_dev mmc
1:7>Okay (0.045s)
1:7>Start Cmd:FB: ucmd setenv mmcdev ${emmc_dev}
1:7>Okay (0.093s)
1:7>Start Cmd:FB: ucmd mmc dev ${emmc_dev}
1:7>Okay (0.06s)
1:7>Start Cmd:FB: flash -raw2sparse all rootfs.sdcard
100%1:7>Okay (37.38s)
1:7>Start Cmd:FB: flash bootloader imx-boot_2G.bin
0x400000001:7>Okay (0.275s)
1:7>Start Cmd:FB: ucmd if env exists emmc_ack; then ; else setenv emmc_ack 0; fi;
1:7>Okay (0.009s)
1:7>Start Cmd:FB: ucmd mmc partconf ${emmc_dev} ${emmc_ack} 1 0
1:7>Okay (0.011s)
1:7>Start Cmd:FB: done
1:7>Okay (0s)
[?25h



```

- repower the board after programering



# 6. Gateway Login

## 6.1 Login Through Debug Uart
- connect uart serial tool to the board's debug uart port

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/6-1.png)

- config the serial tools's uart config

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/6-2.png)


- power on the gateway (user root, no password)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/6-3.png)


## 6.2 Login Through Network(SSH)

- config the ssh connection parameters

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/6-4.png)

- connect success

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/6-5.png)

# 7. Application Layer Development

## 7.1 Led

Here is three leds on the boards.

`pwrled` - power led
`zigbee` - ble/sugb data led
`errled` - network status led

- on led

```shell
echo none >/sys/class/leds/pwrled/trigger
echo 1 >/sys/class/leds/pwrled/brightness
```

- off led

```shell
echo none >/sys/class/leds/pwrled/trigger
echo 0 >/sys/class/leds/pwrled/brightness
```

- blink led

```shell
echo timer >/sys/class/leds/pwrled/trigger
echo 0 >/sys/class/leds/pwrled/brightness
```

## 7.2 Button
This board has two buttons can used by software, we can use `eventd` to test it

```shell
root@DSOM130N:~# /tmp/tools/eventd wait battery_power_switch /dev/input/by-path/platform-keys-event
key 100 Pressed
action: battery_power_switch, code:100, value:1(Pressed)
Wait OK
```

## 7.3 Ethernet
this gateway has 2 ethernet ports

- lan poer `eth0`, bridge on the `br0`

```shell
br0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.66.1  netmask 255.255.255.0  broadcast 192.168.66.255
        inet6 fe80::84b4:b9ff:fed0:f4c7  prefixlen 64  scopeid 0x20<link>
        ether 86:b4:b9:d0:f4:c7  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 53  bytes 6187 (6.0 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

- wan port `eth1`, default as dhcp server

```shell
eth1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.100.102  netmask 255.255.255.0  broadcast 192.168.100.255
        inet6 fe80::74aa:cdff:fe94:d95c  prefixlen 64  scopeid 0x20<link>
        inet6 fd3c:2e3:b96::d78  prefixlen 128  scopeid 0x0<global>
        inet6 fd3c:2e3:b96:0:74aa:cdff:fe94:d95c  prefixlen 64  scopeid 0x0<global>
        ether 76:aa:cd:94:d9:5c  txqueuelen 1000  (Ethernet)
        RX packets 15931  bytes 1351209 (1.2 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1413  bytes 531554 (519.0 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 47  
```

## 7.4 Fan

- open fan

```shell
echo 1 > /sys/class/leds/fanctrl/brightness 
```

- close fan

```shell
echo 0 > /sys/class/leds/fanctrl/brightness 
```

## 7.5 USB

- find use device

```shell
root@DSGW351:~# ls /dev/sd*
/dev/sda   /dev/sda4
```

- 7.14 mount use to mnt

```shell
root@DSGW351:~# mount /dev/sda4  /mnt;
```

## 7.6 BLE

- ble port

```shell
basename `find /sys/bus/usb/devices/1-1\.3:1\.0/ -name "ttyUSB*" -maxdepth 1 2>/dev/null`
ttyUSB0
```

- ble read version

```shell
root@DSOM130N:~# bflash -d /dev/ttyUSB0 -b500000 -r1
3.2.4.297
```

- default ble progress

```shell
root@DSOM130N:~# ps aux | grep bul
root        8769  0.3  0.7  91292 14124 ?        Sl   09:45   0:00 /usr/bin/bul -d /dev/ttyUSB0 -b115200
root        8833  0.0  0.0   2900   684 pts/0    S+   09:45   0:00 grep bul
```


## 7.7 SUBG
- minicom setting


![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/7-1.png)


- send and recv 


![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/7-2.png)


## 7.8 CANx2
this board hard two can devices `can0` and `can1`

- can set

```shell
ifconfig can0 down 2>/dev/null;
ip link set can0 type can bitrate 500000 loopback on 2>/dev/null;
ifconfig can0 up 2>/dev/null;
```

- can recv

```shell
candump can0
```

- can send

```shell
cansend can0 5A1#11.22.33.44.55.66.77.88 2>/dev/null
```


## 7.9 Audio

- play

```shell
 aplay -D "plughw:1,0" /usr/share/sounds/alsa/Rear_Center.wav  -v
```


## 7.10 TFCard

- tfcard mmc device

```shell
root@OK8MP:~# ls /dev/mmcblk1*
/dev/mmcblk1  /dev/mmcblk1p1  /dev/mmcblk1p2
```

- mount tfcard to filesystem

```shell
mount /dev/mmcblk1p1 /mnt/
```



## 7.11 Wifi

- wifi device

```shell
root@DSOM130N:~# ifconfig wlan0
wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.100.104  netmask 255.255.255.0  broadcast 192.168.100.255
        inet6 fd3c:2e3:b96::b52  prefixlen 128  scopeid 0x0<global>
        inet6 fd3c:2e3:b96:0:2ec3:e6ff:fe49:a1ee  prefixlen 64  scopeid 0x0<global>
        inet6 fe80::2ec3:e6ff:fe49:a1ee  prefixlen 64  scopeid 0x20<link>
        ether 2c:c3:e6:49:a1:ee  txqueuelen 1000  (Ethernet)
        RX packets 15046  bytes 1432269 (1.3 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 359  bytes 38316 (37.4 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

root@DSOM130N:~# ifconfig wlan1
wlan1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        ether 2e:c3:e6:49:a1:ee  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 53 overruns 0  carrier 0  collisions 0

```


- sta

```shell
root@DSOM130N:~# cat /etc/systemd/network/21-sta.network 
[Match]
Name=wlan0
[Network]
DHCP=yes

[DHCPv4]
RouteMetric=20
```

- ap mode

ap bridge on the `br0` interface bellow

```shell
root@DSOM130N:~# cat /etc/systemd/network/br0.network 
[Match]
Name=br0

[Network]
Address=192.168.66.1/24
DHCPServer=true
IPMasquerade=ipv4

[DHCPServer]
PoolOffset=100
PoolSize=20
EmitDNS=yes
DNS=9.9.9.9
root@DSOM130N:~# cat /etc/systemd/network/br0.netdev  
[NetDev]
Name=br0
Kind=bridge
```


## 7.12 LTE

- plug in lte module

![](https://dusunprj.oss-us-west-1.aliyuncs.com/DSGW/QSG/DSOM-130N/7-3.png)

- use `/usr/bin/bg96` to dial


- lte on

```shell
echo 0 > /sys/class/leds/ltepwr/brightness
echo 0 > /sys/class/leds/lterst/brightness
sleep 1
echo 1 > /sys/class/leds/ltepwr/brightness
echo 1 > /sys/class/leds/lterst/brightness
```



- lte off

```shell
echo 0 > /sys/class/leds/ltepwr/brightness
echo 0 > /sys/class/leds/lterst/brightness
```

## 7.13 MIPI-CSI-1(xc7160)

```shell
v4l2-ctl -d /dev/video1 --set-fmt-video=width=640,height=480,pixelformat=YUYV --stream-mmap=3 --stream-skip=3 --stream-count=100 --stream-to=out1.yuv
```

## 7.14 MIPI-CSI-2(xc7160)


```shell
v4l2-ctl -d /dev/video1 --set-fmt-video=width=640,height=480,pixelformat=YUYV --stream-mmap=3 --stream-skip=3 --stream-count=100 --stream-to=out1.yuv
```




