# DSOM-170N  i.MX9352  SoM

<div style="text-align: center;">
    <a href="javascript:window.print()" style="background-color: orange; color: black; border: none; padding: 10px 40px; font-size: 16px; text-decoration: none; display: inline-block; cursor: pointer;">Print</a>
</div>

# 1. Product Introduction

## **1.1. Purpose and Description**

The DSOM-170N i.MX9352-C System on Module (SoM) is Dusun's cutting-edge system on module, designed as an alpha partner solution based on the powerful i.MX 93 family's i.MX9352 system-on-chip (SoC). Featuring two Arm Cortex-A55 cores and one Arm Cortex-M33 core, the module can reach speeds of up to 1.7GHz, providing substantial processing capabilities.

In terms of connectivity, the DSOM-170N offers an impressive array of interfaces, including 8x UART, 2x Ethernet (with 1 TSN-capable port), 2x USB2.0, and 2x CAN-FD, along with various other common connectivity options. This extensive set of interfaces ensures the module can seamlessly integrate into a wide range of embedded and industrial applications.

Compared to the previous i.MX6 and i.MX8 families, the DSOM-170N represents a significant step forward in terms of capabilities. Notably, it integrates a dedicated neural processing unit (NPU) engine, enabling accelerated performance for demanding deep learning workloads.

Despite its advanced feature set, To further enhance the development experience, Dusun provides a wealth of free and open-source development documents and software resources, empowering engineers to streamline their development cycles and maximize their efficiency.

## **1.2. Product Feature Summary**

-  Multi-core architecture featuring an Arm Cortex-A core and an Arm Cortex-M core, enabling powerful multi-tasking capabilities with real-time control

- 0.5 TOPS Ethos U-65 microNPU for accelerating light AI applications

- Dual Gigabit Ethernet interfaces, with one port supporting Time-Sensitive Networking (TSN) for industrial and real-time Ethernet-based systems

- Single dual-lane MIPI-CSI interface for high-speed camera and imaging integration

- Wide range of ready-to-use interfaces, ensuring excellent signal and power integrity to simplify system integration and development

- Advanced performance combined with a cost-efficient profile, making it a compelling solution for embedded and industrial applications


## **1.3.Application**

* Camera video monitoring
* Two-way video conference
* Visual doorbell
* Image analysis
* Home display
* Wireless or networked speakers
* Home appliance system control 
* Sound amplification device system

# **2. System Block Diagram**

## **2.1.Main Chip Block Diagram**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-170N/202409061519861.png)



# **3.  Basic Parameters and Interfaces**

| **Item**                            | **Parameter**                                                |
| ----------------------------------- | ------------------------------------------------------------ |
| CPU                                 | NXP i.MX9352  MPU: Cortex-A55 @1.5GHz  MCU: Cortex-M33 @250 MHz  NPU: 0.5 TOPS |
| RAM                                 | 1GB  LPDDR                                                   |
| ROM                                 | 8GB  eMMC                                                    |
| Operating  Voltage                  | Typical  voltage 5V                                          |
| Temperature                         | Operating  Temperature: -40 °C ~85 °C                        |
| Storage  Temperature: -40 °C ~85 °C |                                                              |
| Humidity                            | 10~90%(Non-condensing)                                       |
| Barometric  Pressure                | 76Kpa  ~106Kpa                                               |
| Size                                | 48mm×33mm  x 1.5mm                                           |

| **Item**     | QTY  | **Parameter**                                                |
| ------------ | ---- | ------------------------------------------------------------ |
| LCD          | 1    | Parallel RGB888, up to  1366×768p60 or 1280×800p60           |
| LVDS         | 1    | Single 4-lane supports  720p60, up to 1366×768p60 or 1280×800p60 |
| MIPI-DSI     | 1    | 1x 4-lane MIPI DSI  Compatible with MIPI-DSI V1.2 and MIPI D-HPY V1.2  Pixel clock up to 200MHz, and pixel filling rate 140 MP/s, 24-bit  Supports resolution of 1080p60 or 1920x 1200p60, each lane up to 1.5GHz |
| Ethernet     | ≤2   | 2x RGMII with one supports TSN;  Ethernet with TSN supports QoS, supports 802.1Qbv and 802.1Qbu  Transmission rate 10/100/1000 Mbps, complies with IEEE 802.3 |
| UART         | ≤8   | Baud rate up to 5Mbps                                        |
| CAN-FD       | ≤2   | Supports CAN-FD and CAN 2.0B                                 |
| USB          | ≤2   | Two USB2.0 controllers integrated with PHY                   |
| SD card slot | ≤1   | Complies with SD3.0;  Supports SDR up to 200MHz and DDR up to 50MHz |
| SDIO         | ≤1   | Complies with SDIO3.0                                        |
| SAI          | ≤3   | SAI1 supports 2 lanes, SAI2 supports 4 lanes, and SAI3 supports 1 lane;  Full-duplex serial supports frame synchronization, such as I2S, AC97,  TDMandcodec/ DSP |
| SPDIF        | 1    | Supports original capturing mode;  Supports L-PCM and IEC61937 forms |
| PDM          | 1    | 24-bit, supports linear phase response and AOP MIC           |
| MIPI-CSI     | 1    | Compiles both MIPI CSI-2 V1.3 and MIPI D-PHY V1.2;  Supports up to 2 RX data lanes (and 1 RX clock lane)  Pixel clock up to 200MHz, pixel filling rate up to 150MP/s under rated  voltageandoverspeed voltage;  80Mbps~1.5 Gbps under high-speed mode, and 10Mbps rating under lowpower  mode |
| SPI          | ≤8   | Supports to configure master and slave modes                 |
| I2C          | ≤8   | Rating up to 100Kbit/s in standard mode, and 400Kbit/s in fast-speed  mode, 1000Kbit/ sinenhanced fast-speed mode, 3400Kbit/s in high-speed mode,  and 5000Kbit/s in super fast speed mode. |
| I3C          | ≤2   | Supports 400Kbit/s fast speed mode and 1000Kbit/s enhanced fast speed  mode, backwardcompatible with I2C. |
| ADC          | ≤4   | One 12-bit 4-lane 1MS/s ADC                                  |
| JTAG         | 1    | For M33 core debugging                                       |

# **4. Pin Definition**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-170N/202409090931536.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-170N/202409090931536-20240909093227684.png)

# **5. Product Dimensions**

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-170N/20240909093521.png)

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-170N/20240909093521-20240909093611505.png)

| **Item**          | **Parameter**                                          |
| ----------------- | ------------------------------------------------------ |
| Exterior          | Board  To Board Connectors                             |
| Core  Board Size  | 48mm  X 33mm X 1.6mm                                   |
| Pin  Spacing      | 0.4  mm                                                |
| Number  of Pins   | 100  Pins                                              |
| Number  of Layers | 4 layers, produced  by gold sinking process, lead-free |
| Warpage           | less  than 0.5 %                                       |

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

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-060N/202408171534638.png)

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

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-060N/202408171621790.png)

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

![](https://dusunprj.oss-us-west-1.aliyuncs.com/oss://dusunprj/DSOM/spec/DSOM-060N/202408171623898.png)

## **6.8.Order Information**

| Model       | RAM  | eMMC |
| ----------- | ---- | ---- |
| DSOM-170N-2 | 1GB  | 8GB  |


