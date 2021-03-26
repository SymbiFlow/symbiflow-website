# Google Season of Docs 2021 Organization Application

## Project title: Create a set of guidelines on using and contributing to an open source FPGA development flow

## About SymbiFlow

SymbiFlow is the first fully open source toolchain for vendor-neutral, portable, modular and future-proof development on Field Programmable Gate Arrays (FPGAs).

FPGAs are very flexible and configurable, massively parallel hardware processing platforms (chips) which can adapt their operation to a given workload in runtime. They can be found in devices such as video cameras, frame grabbers, satellites, cellular base stations, lab equipment, autonomous cars etc. since for specific, parallel workflows they operate at much lower power and latency as well as higher performance than general-purpose processors (CPUs). FPGAs are also widely used for all sorts of hardware hacking purposes - driving LED arrays, emulating old gaming consoles, converting and processing signals.

SymbiFlow aims to bring the awesomeness of FPGAs, which can also be viewed as software-configurable-hardware, to even more use cases by making them more open and easy to use. Currently, while it is possible to program (configure) FPGAs using open and portable hardware description languages such as Verilog and VHDL (or even “regular” programming languages like Python and Scala), the compilers needed to do this are closed and vendor-specific. This limits adoption and the capability to innovate on the FPGA programming workflows themselves by creating walled-off ecosystems and causing separate learning curves depending on the FPGA platform used.

Therefore the SymbiFlow project’s aim is to open up the FPGA toolchain space to a fully collaborative, modular, vendor-neutral and reusable development model by creating a suite of open source, interchangeable tools which target various FPGA platforms. With the open flows already working for several popular FPGAs, we are already seeing how the open toolchain can help optimise and automate FPGA development workflows and push FPGAs towards widespread adoption. This is much like what open source compilers did for software, hence our motto - the GCC of FPGAs!

## About the project

### Project problems

SymbiFlow is aiming to do something that has never been done before, namely to provide the first fully open source flow for FPGA development that consists of vendor-neutral and future-proof tooling. That’s why it is still rough around the edges here and there, especially when it comes to documentation and guidelines on how to use the toolchain and how to contribute to it. 

Over the course of the project’s duration we have seen many users get confused as to which components of the toolchain need to be built locally and which ones can be downloaded already pre-built. They often start by recreating the whole FPGA architecture definitions instead of simply using them (and build only the required tools). Architecture description generation is quite a complicated process that requires a lot of resources and time. This causes frustration of the early adopters and clear guidelines for this would help remove the confusion, shortening the time and effort needed to contribute.

Another thing is that users are directed to installation artifacts which they need to download in order to have a complete set of data files required to successfully run the toolchain but there is no documentation that would describe what those artifacts include.

The documentation is also missing information about possible error messages that particular tools may generate, clear list of supported FPGA features or comprehensive contribution guidelines.

The technical writer involved in the SymbiFlow project will be tasked with dividing the [symbiflow-examples](https://symbiflow-examples.readthedocs.io/en/latest/) docs into examples description, toolchain description, device database and bitstream deployment, as well as generating guidelines on the downloadable contents related to the toolchain. They will also be required to add a troubleshooting section containing example error messages with information where the problem may be and how to solve it, review the contribution guidelines, including templates used for reporting new issues, add a list of supported FPGA cells along with the extent of the support, as well as come up with a summary what is needed and where to look for information. 


### Our project scope:

* Review [symbiflow-examples docs](https://symbiflow-examples.readthedocs.io/en/latest/)
  * split:
     * Examples description
     * toolchain description
     * Device database
     * Bitstream deployment
  * Add info on downloadable contents related to the toolchain (symbiflow-arch-defs products)
* Add troubleshooting section
  * Include example error messages with information where the problem may be and what to check.
  * Refer to tools error messages (what is reported by Yosys, VPR etc)
* Review respective contribution guidelines and come up with a summary with short description of what is needed and where to look for information
* Add a list of supported FPGA cells along with the support extent (all features or just only some features). Add a list of supported IOSTANDARDS


### How we measure success:

* Consolidated and easy to find set of guidelines on usage and contribution
* Decreased number of GitHub inquiries about issues, usage and contribution 
* Increased number of users and contributors to SymbiFlow
* Users and contributors work more effectively, e.g., don’t build architecture definitions from scratch but use the pre-built ones.



### Budget:

* Technical writer - 9800 USD
* Project swag (10 t-shirts) - 200 USD

### Skills needed

* Experience working with technical documentation 
* Basic understanding of computer science
* Basic knowledge of FPGAs would be nice to have
* Familiarity with GitHub

### Volunteers

#### Technical support

* [Karol Gugala ](https://github.com/kgugala)
* [Tom Michalak](https://github.com/tmichalak)
* [Alessandro Comodi](https://github.com/acomodi)
* [Maciej Kurc](https://github.com/mkurc-ant)

#### Technical writing mentorship

* [Peter Zurawski](https://github.com/zuravinho)


### Contact info

Interested technical writers should reach out to us via [mail](mailto:contact@symbiflow.org). Please include links to your technical writing work and a CV.

## Additional information

* Regular participation in Google Summer of Code.
* Experience of our technical support team in mentoring university students, GSoC participants and in working with technical writers.

