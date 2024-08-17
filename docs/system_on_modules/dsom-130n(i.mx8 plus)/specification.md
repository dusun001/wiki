# DSOM-130N i.MX8M Plus SoM

<div style="text-align: center;">
    <a href="javascript:window.print()" style="background-color: orange; color: black; border: none; padding: 10px 40px; font-size: 16px; text-decoration: none; display: inline-block; cursor: pointer;">Print</a>
</div>

## **1.1. Purpose and Description**

The i.MX 8M Plus core board utilizes the NXP i.MX 8M Plus processor, featuring either a quad-core or dual-core Cortex-A53 CPU with a high-performance frequency of 1.6 GHz, along with a Cortex- M7 CPU operating at up to 800 MHz.

The i.MX 8M Plus series is designed for machine learning and vision, advanced multimedia, and reliable industrial automation, catering to the growing demands of smart homes, buildings, cities, and Industry 4.0 applications.

The DSOM-130N Core Board offers a wide range of development documents and software resources that are both free and open-source. This convenience enables developers to enhance their efficiency and shorten the development cycle.

## **1.2. Product Feature Summary**

- Compact form factor with numerous GPIO interfaces

-  Dimensions: 62mm x 36mm, featuring a board-to-board connector

- Equipped with an NPU with 2.3 TOPS

- Includes VPU, GPU, ISP, HiFi 4, and CAN-FD

- Dual Gb Ethernet support, one with Time Sensitive Networking (TSN) for gateway applications requiring low latency

- eMMC up to 16GB

- RAM up to 2GB

- 8-layer board-to-board connector, manufactured using immersion gold technology, includes

  an independent ground signal layer and lead-free

- Provides 320 PIN outputs, including nearly all CPU pins

- RoHS certified

## **1.3.Application**

* Industrial Control: Machine vision and robot controllers, building safety, power grid and distribution, industrial computers
* Smart City: Traffic detectors and traffic optimization, targeted advertising, visual payment systems
* Smart Home: Intelligent robots, appliances, AI home servers, and alarm centers 
* Communication Infrastructure: Teleconferencing systems

# **2. System Block Diagram**

## **2.1.Main Chip Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-130N/20240817105759.png)

The compatible CPU models of the core board are shown in the table below, and our company has chosen the model of MIMX8ML8CVNKZAB.

For more information on i.MX8M Plus, please visit the NXP official website: https://www.nxp.com.cn/products/processors-and-microcontrollers/arm-processors/i-mx- applications-processors/i-mx-8-processors/i-mx-8m-plus-arm-cortex-a53-machine-learning- vision-multimedia- and-industrial-iot:IMX8MPLUS

| **Part Number** | **Device Description** | **Part difference description** | **Number of A53 Cores** | **A53 speed** | **Temp Width** |
| --------------- | ---------------------- | ------------------------------- | ----------------------- | ------------- | -------------- |
| MIMX8ML8CVNKZAB | i.MX 8M Plus Quad      | NPU,ISP,VPU,HiFi4， CAN-FD      | 4                       | 1.6 GHz       | Industrial     |
| MIMX8ML6CVNKZAB | i.MX 8M Plus Quad      | ISP, VPU, CAN-FD                | 4                       | 1.6 GHz       | Industrial     |
| MIMX8ML4CVNKZAB | i.MX 8M Plus QuadLite  | CAN-FD                          | 4                       | 1.6 GHz       | Industrial     |
| MIMX8ML3CVNKZAB | i.MX 8M Plus Dual      | NPU,ISP,VPU,HiFi4， CAN-FD      | 2                       | 1.6 GHz       | Industrial     |
| MIMX8ML8DVNLZAB | i.MX 8M Plus Quad      | NPU,ISP,VPU,HiFi4， CAN         | 4                       | 1.8 GHz       | Consumer       |
| MIMX8ML6DVNLZAB | i.MX 8M Plus Quad      | ISP, VPU, CAN                   | 4                       | 1.8 GHz       | Consumer       |
| MIMX8ML4DVNLZAB | i.MX 8M Plus QuadLite  | CAN                             | 4                       | 1.8 GHz       | Consumer       |
| MIMX8ML3DVNLZAB | i.MX 8M Plus Dual      | NPU,ISP,VPU,HiFi4， CAN         | 2                       | 1.8 GHz       | Consumer       |

# **3.  Basic Parameters and Interfaces**

| Item                | Parameter                                                    |
| ------------------- | ------------------------------------------------------------ |
| CPU                 | Quad Cortex®-A53 processors operation  operating up to 1.6GHz Cortex®-M7 CPU operating up to 800 MHz |
| GPU                 | • GC7000UL with OpenCL and Vulkan support • 2 shaders<br>• 166 million triangles/sec<br>• 1.0 giga pixel/sec<br>• 16 GFLOPs 32-bit<br>• Supports OpenGL ES 1.1, 2.0, 3.0, OpenCL 1.2, Vulkan<br>• Core clock frequency of 1000 MHz<br>• Shader clock frequency of 1000 MHz<br>• GC520L for 2D acceleration<br>• Render target compatibility between 3D and 2D GPU (super tile status buffer) |
| VPU                 | Video Decode<br/>• 1080p60 HEVC/H.265 Main, Main 10 (up to level 5.1) <br/>• 1080p60 VP9 Profile 0, 2<br/>• 1080p60 VP8<br/>• 1080p60 AVC/H.264 Baseline, Main, High decoder Video Encode<br/>• 1080p60 AVC/H.264 encoder<br/>• 1080p60 HEVC/H.265 encoder |
| RAM                 | 2GB (1GB/4GB optional)                                       |
| NPU                 | 2.3 TOP/s Neural Network performance<br/> • Keyword detect, noise reduction, beamforming<br/> • Speech recognition (i.e. Deep Speech 2)<br/> • Image recognition (i.e. ResNet-50) |
| Storage             | eMMC 16 GB (8GB / 16GB / 32GB eMMC optional)                 |
| Operating Voltage   | Typical voltage 5V/2.5A                                      |
| OS                  | Linux                                                        |
| Temperature         | Operating Temperature: -40 °C ~80 °C<br/>Storage Temperature: -40 °C ~85 °C |
| Humidity            | 10~95%(Non-condensing)                                       |
| Barometric Pressure | 76Kpa ~106Kpa                                                |
| Size                | 62mm×36mm x 4.0mm                                            |

| **Item** | **Parameter**                                                |
| -------- | ------------------------------------------------------------ |
| USB 2.0  | 2 X USB2.0, two of which is for OTG                          |
| USB 3.0  | 2 X USB3.0，with intergrated PHY                             |
| PCIE     | 2 X PCIE, Supports 1-way PCI Express Gen3.0                  |
| MIPI CSI | 2 X MIPI CSI，Provide two 4-lane MIPI camera serial interfaces, capable of operating up to 1.5 Gbps |
| MIPI DSI | 1 X MIPI DSI，Provide 1 4-lane MIPI display serial interface, capable of operating up to 1.5 Gbps <br/> • 1080 p60 <br/> • WUXGA (1920x1200) at 60 Hz<br/>1920x1440 at 60 Hz <br/> UWHD (2560x1080) at 60 Hz<br/> WQHD (2560x1440) by reduced blanking mode |
| HDMI     | 1X HDMI<br/> • Supports HDMI 2.0a display resolution up to 4Kp30<br/> • Supports HDMI2.1 eARC |
| LVDS     | 1X LVDS,<br/> • Single channel (4 lanes) support 720p60;<br/> • Dual asynchronous channels (8 data, 2clocks) support 1920x1200p60 |
| Ethernet | 2 X RGMII, Supports two RGMII interfaces, with one supporting TSN |
| SDIO     | 2 X SDIO<br/>• SD2, 4-bit, supports 1.8/3.3V mode switching<br/>• SD1, 8-bit, only supports 1.8V mode |
| UART     | 4 X UART , The maximum supported baud rate is 4Mbp           |
| SPI      | 3 X SPI , The maximum supported speed is 52Mbit/s, and the master-slave mode can be configured |
| I2C      | 5 X I2C, The maximum speed supported in standard mode is 100Kbit/s; The maximum supported speed in fast mode is 400Kbit/s |
| CAN      | 2 X CAN, The communication controller of CAN is implemented using the CAN FD protocol, as well as the CAN protocol that complies with the CAN 2.0B protocol specification. (CAN FD requires CPU version support) |
| SAI      | 6 X SAI, Synchronous Audio Interface (SAI), a full duplex serial interface that supports frame synchronization, such as I2S, AC97, TDM, and codec/DSP interfaces |
| SPDIF    | 1 X SPDIF，A standard audio file transfer format jointly developed by Sony and Philips |
| PWM      | 4 X PWM，With 16 bit counter                                 |
| QSPI     | 1 X QSPI，Already occupied by the core board, connected to 16MB of No Flash |
| JTAG     | 1 X JTAG，For debugging                                      |
| Upgrade  | supports local firmware upgrades via USB interface           |

# **4. Pin Definition**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-130N/202408171446757.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-130N/202408171447197.png)

# **5. Product Dimensions**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-130N/202408171454038.png)

| **Item**            | **Parameter**             |
| ------------------- | ------------------------- |
| Exterior            | Board To Board Connectors |
| Core Board Size     | 62mm X 36mm X 4.0mm       |
| Pin Spacing         | 0.5 mm                    |
| Pin Pad Size        | 1.6mm X 0.65mm            |
| PCB Board Thickness | 1.6mm                     |
| Number of Pins      | 132 Pins                  |
| Number of Layers    | 8 floors                  |
| Warpage             | less than 0.5 %           |

# **5.The Methods of Coreboard Thermal Control**

## **5.1. Thermal Control Strategy**

There is a generic thermal system driver framework in the Linux kernel that defines a number of temperature control strategies. The following three strategies are currently in common use:

* **Power_allocator:** Introduces proportional-integral-derivative (PID) control, dynamically allocates power to each module based on the current temperature converts power to Frequency to achieve Frequency limiting based on temperature.

* **Step_wise:** Limits the Frequenof in steps based on the current temperature.
* **User space**: Does not limit Frequency.
   The RK3328 chip has a T-sensor that detects the chip's internal temperature and uses the Power_allocator strategy by default. The operating states are as follows:

* If the temperature exceeds the set temperature value:
  * If the temperature trend is rising, the Frequency is gradually reduced.
  * If the temperature trend is falling, the Frequency is gradually increased.

* When the temperature falls to the set temperature value:
  * If the temperature trend is increasing, the Frequency remains unchanged. 
  * If the temperature trend is falling, the Frequency is gradually increased.

* Suppose the Frequency reaches its maximum and the temperature is still below the set value. In that case, the CPU frequency is no longer under thermal control, and the CPU frequency becomes system load frequency modulation.

* If the chip is still overheating after the Frequency has been reduced (e.g., due to poor heat dissipation) and the temperature exceeds 95 degrees, the software will trigger a restart. If the restart fails due to deadlock or other reasons and the chip exceeds 105 degrees, the otp_out inside the chip will trigger an immediate shutdown by the PMIC.

Note: The temperature trend is determined by comparing the previous and current temperatures. If the device temperature is below the threshold, the temperature is sampled every l seconds; if the device temperature exceeds the threshold, the temperature is sampled every 20ms, and the Frequency is limited.

# **6.Production Guide**

## **6.1. SMT process**

Select modules that can be SMT or in-line packaged according to the customer's PCB design scheme. If the board is designed for SMT packaging, use SMT-packaged modules. If the board is designed for in-line assembly, use in-line assembly. Modules must be soldered within 24 hours of unpacking. If not, place them in a dry cabinet with a relative humidity of no more than 10% or re- pack them in a vacuum and record the exposure time (total exposure time must not exceed 168 hours).

Instruments or equipment required for SMT assembly:

* SMT Mounter
* SPI
* Reflow soldering
* Oven temperature tester
* AOI

Instruments or equipment required for baking:

* Cabinet ovens
* Antistatic high-temperature trays
* Antistatic and high-temperature gloves

## **6.2. Module storage conditions**

Moisture-proof bags must be stored at a temperature <40°C and humidity <90% RH. Dry-packed products have a shelf life of 12 months from the date of sealing of the package—sealed packaging with a humidity indicator card.

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-130N/202408171534638.png)

## **6.3. Baking is required when**

The vacuum bag is found to be broken before unpacking.
After unpacking, the bag is found to be without a humidity indicator card.
The humidity indicator card reads 10% or more after unpacking, and the color ring turns pink. 

Total exposure time after unpacking exceeds 168 hours.

More than 12 months from the date of the first sealed packaging.

**Baking parameters are as follows:**

Baking temperature: 60°C for reel packs, humidity less than or equal to 5% RH; 125°C for tray packs, humidity less than or equal to 5% RH (high-temperature-resistant trays, not blister packs for tow trays).
Baking time: 48 hours for reel packaging; 12 hours for pallet packaging.

Alarm temperature setting: 65°C for reel packs; 135°C for pallet packs.
After cooling to below 36°C under natural conditions, production can be carried out.
If the exposure time after baking is greater than 168 hours and not used up, bake again.
If the exposure time is more than 168 hours without baking, it is not recommended to use the reflow soldering process to solder this batch of modules. The modules are class 3 moisture-sensitive devices and may become damp when the exposure time is exceeded. This may lead to device failure or poor soldering when high-temperature soldering is carried out.

## **6.4. ESD**

Please protect the module from electrostatic discharge (ESD) during the entire production process.

## **6.5.Conformity**

To ensure product qualification rates, it is recommended to use SPI and AOI test equipment to monitor solder paste printing and placement quality.

## **6.6.Recommended Furnace Temperature Profile**

Please follow the reflow profile for SMT placement with a peak temperature of 245°C. The reflow temperature profile is shown below using the SAC305 alloy solder paste.

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-130N/202408171621790.png)

**Description for graphs of curves.**

A: Temperature axis
B: Time axis
C: Alloy liquid phase line temperature: 217-220°C
D: Slope of temperature rise: 1-3°C/s
E: Constant temperature time: 60-120s, constant temperature: 150-200°C
F: Time above liquid phase line: 50-70s
G: Peak temperature: 235-245°C
H: the slope of temperature reduction: 1-4°C/s
Note: above-recommended curves are based on SAC305 alloy solder paste as an example. Please set the recommended oven temperature curve for other alloy solder pastes according to the solder paste specification.

## **6.7.Storage**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-130N/202408171623898.png)

## **6.8.Order Information**

| Model       | RAM  | eMMC |
| ----------- | ---- | ---- |
| DSOM-130N-1 | 2GB  | 16GB |

