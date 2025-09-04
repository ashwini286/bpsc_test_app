import ComputerNextwork from "./questions/ComputerNextwork&Internet";
import ComputerBasics from "./questions/ComputerBasic";
import AI from "./questions/AI";
import Multimedia from "./questions/MultiMedia";
import IOT from "./questions/IOT";
import OperatingSystem from "./questions/OperatingSystem"
import MS_Office from "./questions/MS_Office";
import TOC from "./questions/TOC";
import NumberSystemAndDigitalLogic from "./questions/NumberSystem&DigitalLogic";
import DBMS from "./questions/DBMS";
import ProgrammingFundamentalsAndOOP from "./questions/ProgrammingFudamentals&Oops";
import DataStructures from "./questions/DS";
import WebTechnologies from "./questions/WebTechnology";
import SoftwareEngineering from "./questions/SoftwareEnginnering";
import CyberSecurityAndEthics from "./questions/CyberSecurity&Ethics";
import FundmentailOfECommerce from "./questions/E_Commerce";

const chapters = {
    "Computer Basics & Hardware": ComputerBasics,
    "Number Systems & Digital Logic": NumberSystemAndDigitalLogic,
    "Operating Systems": OperatingSystem,
    "Database Management System (DBMS)": DBMS,
    "Computer Networks & Internet": ComputerNextwork,
    "Programming Fundamentals & OOP": ProgrammingFundamentalsAndOOP,
    "Data Structures": DataStructures,
    "Web Technologies": WebTechnologies,
    "Software Engineering": SoftwareEngineering,
    "Cyber Security & Ethics": CyberSecurityAndEthics,
    "MS Office & Practical ICT": MS_Office,
    "Theory of Computation": TOC,
    "Artificial Intelligence": AI,
    "Fundamentail of E-commerce": FundmentailOfECommerce,
    "Multimedia": Multimedia,
    "Internate of things": IOT,
};

export default chapters;