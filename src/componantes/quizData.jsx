import computerBasics from "./questions/ComputerBasic"
import computerNextwork from "./questions/ComputerNextwork&Internet";
import AI from "./questions/AI";
import Multimedia from "./questions/MultiMedia";
import IOT from "./questions/IOT";
import OperatingSystem from "./questions/OperatingSystem"
import MS_Office from "./questions/MS_Office";
import TOC from "./questions/TOC";
import NunberSystemAndDigitalLogic from "./questions/NumberSystem&DigitalLogic";
import DBMS from "./questions/DBMS";
import ProgrammingFundamentalsAndOOP from "./questions/ProgrammingFudamentals&Oops";
import DataStructures from "./questions/DS";
import WebTechnologies from "./questions/WebTechnology";
import SoftwareEngineering from "./questions/SoftwareEnginnering";
import CyberSecurityAndEthics from "./questions/CyberSecurity&Ethics";
import FundmentailOfECommerce from "./questions/E_Commerce";

const chapters = {
    "Computer Basics & Hardware": computerBasics,
    "Number Systems & Digital Logic": NunberSystemAndDigitalLogic,
    "Operating Systems": OperatingSystem,
    "Database Management System (DBMS)": DBMS,
    "Computer Networks & Internet": computerNextwork,
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