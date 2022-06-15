import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import axios from "axios";
import { useNavigate } from "react-router";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import getCroppedImg from "./cropImage";
import "./Form.css";

var isGithubUrl = require("is-github-url");

const profileMaxSize = 4098;
const profileMinSize = 100;

const courseTitleMaxLength = 50;
const collegeTitleMaxLength = 50;

const projectTitleMaxLength = 25;
const projectIntroMaxLength = 100;
const projectRolesMaxLength = 150;
const projectFeaturesMaxLength = 150;

const courseTitleLabel = "Course/Degree Title  (maximum " + courseTitleMaxLength + " characters) *"
const collegeTitleLabel = "College/institute/School name (maximum " + collegeTitleMaxLength + " characters) *"

const projectTitleLabel = "Project Title  (maximum " + projectTitleMaxLength + " characters) *"
const projectIntroLabel = "Write a quick brief about project (maximum " + projectIntroMaxLength + " characters) *"
const projectRolesLabel = "Project Roles, each in new line (maximum " + projectRolesMaxLength + " characters) *"
const projectFeaturesLabel = "Project Features, each in new line (maximum " + projectFeaturesMaxLength + " characters) *"

const techStacks = ["HTML", "CSS", "JavaScript", "React","Redux","Git","SQL","Java", "Express", "NodeJS", "MongoDB", "MUI", "ChakraUI", "Python" , "Flask" , "Keras"]
const softSkills = ["Time management", "Communication", "Adaptability", "Problem-solving", "Teamwork", "Creativity", "Leadership", "Interpersonal skills"]
// var techStackObj = {};

const Form = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels)
    }, [])



    const showCroppedImage = useCallback(async () => {
      try {
        const croppedImage = await getCroppedImg(
          URL.createObjectURL(selectedFile),
          croppedAreaPixels,
          rotation
        )
        console.log('donee', { croppedImage })
        setOpenDialog(false);
        setCroppedImage(croppedImage)
        setPreview(croppedImage)
        // setSelectedFile(URL.createObjectURL(croppedImage))
      } catch (e) {
        console.error(e)
      }
    }, [croppedAreaPixels, rotation])
  
    const [openDialog, setOpenDialog] = useState(false);
  
    function handleCloseForm()
    {
      setOpenDialog(false);
    }
    function handleOpenForm()
    {
      setOpenDialog(true);
    }
  
  const [pageLoading, setPageLoading] = useState(true);
  const [userPreviousData, setUserPreviousData] = useState(false);
  const [profilevalidation, setProfileValidation] = useState(false);

  
  useEffect(() => {
    // async function lookingForOldData()
    // {
  const userId = JSON.parse(localStorage.getItem("loggedinUser")) || null;
  if(userId != null)
    {
        axios
          .get(`https://masairesumebuilder.herokuapp.com/resume/${userId}`)
          .then((res) => {
            setUserPreviousData(res.data);
            console.log(res.data)
            if(res.data.length == 0)
            {
              setPageLoading(false);
            }
            else{
              let dataLength = res.data.length-1;
              setStudentName(res.data[dataLength].personal.name);
            setTagline(res.data[dataLength].personal.tagLine)
            setTagline(res.data[dataLength].personal.tagLine)
            setPreview(res.data[dataLength].personal.profilePic)
            // setSelectedFile(res.data[dataLength].personal.profilePic)
            setAbout(res.data[dataLength].summary)
            setContact(res.data[dataLength].personal.mob)
            setAddress(res.data[dataLength].personal.address)
            // setLinkedinLink(res.data[dataLength].personal.linkedin)
            var tempLinkedin = (res.data[dataLength].personal.linkedin).split("/")
            // console.log(tempLinkedin)
              setLinkedinLink(tempLinkedin[tempLinkedin.length-2])
            if(res.data[dataLength].personal.linkedin)
              setPortfolioLink(res.data[dataLength].personal.portfolio);
            // setGithubLink(res.data[dataLength].personal.github)
            var tempGithub = (res.data[dataLength].personal.github).split("/")
            // console.log(tempGithub)
              setGithubLink(tempGithub[tempGithub.length-2])
            setEmailID(res.data[dataLength].personal.email)
            setEducationData(res.data[dataLength].education)
            setProjectData(res.data[dataLength].projects)
            setStudentSoftSkills(res.data[dataLength].softSkills)
            setStudentTechStacks(res.data[dataLength].techSkills)

            setStudentAccomplishment(res.data[dataLength].accomplishments.join("\n"))
            setStudentInterests(res.data[dataLength].interests.join(", "))

            if(res.data[dataLength].workEx && res.data[dataLength].workEx.length != 0)
            {
              setWorkExperienceData(res.data[dataLength].workEx)
              setShowExperienceRendering(true);
              setDisplayWorkExperienceData(true);
            }
            
            setDisplayEducationData(true);
            setDisplayProjectData(true);
            setProfileValidation(true);
            }
            // console.log(userPreviousData)
          })
          .then(()=>{
            setPageLoading(false)
          })
          .catch((e) => console.log(e.message))
        } 
        else
        {
          setPageLoading(false)
          console.log("user is not logged in");          
        }
        }, []);



 
  const navigate = useNavigate();

  const [maxTechStacksRendering, setMaxTechStacksRendering] = useState(false); // maxTechStacksRendering for conditional


  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview("https://icons-for-free.com/download-icon-business+costume+male+man+office+user+icon-1320196264882354682_512.png")
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    // setPreview(objectUrl)

    // // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
    setProfileValidation(false);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setOpenDialog(true);
    setSelectedFile(e.target.files[0])
  }


  const [studentName, setStudentName] = useState('');
  const [tagline, setTagline] = useState('');
  const [address, setAddress] = useState('');
  const [emailID, setEmailID] = useState('');
  const [contact, setContact] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [about, setAbout] = useState('');

  const [courseTitle, setCourseTitle] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [educationData, setEducationData] = useState([]);
  const [editEducationDataIndex, setEditEducationDataIndex] = useState(-1)


  const [courseTitleError, setCourseTitleError] = useState('');
  const [collegeNameError, setCollegeNameError] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');

  const [displayEducationData, setDisplayEducationData] = useState(false);

  const [openEducationForm, setOpenEducationForm] = useState(false);


  const [displayProjectData, setDisplayProjectData] = useState(false);

  var studentTechStackSet = new Set();

  const handleOpenEducationForm = () => {
    if (educationData.length == 3) {
      alert("You already have added three educations, can't add more")
      return;
    }
    setCollegeName("");
      setCourseTitle("");
      setStartDate("");
      setEndDate("");
    setEditEducationDataIndex(-1);
    setOpenEducationForm(true);
  };

  const handleCloseEducationForm = () => {
    setOpenEducationForm(false);
  };

  const addEducation = () => {
    if (courseTitle.length == 0) {
      setCourseTitleError("Course/Degree title can't be blank")
      return;
    }
    if (collegeName.length == 0) {
      setCollegeNameError("College/institute/School name can't be blank")
      return;
    }
    if (startDate.length == 0) {
      setStartDateError("Start date can't be blank")
      return;
    }
    if (endDate.length == 0) {
      setEndDateError("End date can't be blank")
      return;
    }
    if (startDate > endDate) {
      setEndDateError("End date can not be earlier than start date");
      return;
    }
    setOpenEducationForm(false)
    displayEducationDetails();
  }

  const displayEducationDetails = () => {
    if (editEducationDataIndex == -1) {
      console.log(collegeName, startDate, endDate)
      let temp = {
        "course": courseTitle,
        "institute": collegeName,
        "start": startDate,
        "end": endDate
      }
      setCollegeName("");
      setCourseTitle("");
      setStartDate("");
      setEndDate("");
      setEducationData([...educationData, temp]);
    }
    else {
      educationData[editEducationDataIndex].course = courseTitle;
      educationData[editEducationDataIndex].institute = collegeName;
      educationData[editEducationDataIndex].start = startDate;
      educationData[editEducationDataIndex].end = endDate;
    }
    setDisplayEducationData(true);
  }


  const [openProjectForm, setOpenProjectForm] = useState(false);

  const [projectTitle, setProjectTitle] = useState('');
  const [projectIntro, setProjectIntro] = useState('');
  const [projectRoles, setProjectRoles] = useState('');
  const [projectFeatures, setProjectFeatures] = useState('');
  const [projectGithubLink, setProjectGithubLink] = useState('');
  const [projectLiveLink, setProjectLiveLink] = useState('');
  const [projectTechStacks, setProjectTechStacks] = useState('');
  const [projectCollaborated, setProjectCollaborated] = useState(false);

  

  const [projectTitleError, setProjectTitleError] = useState('');
  const [projectIntroError, setProjectIntroError] = useState('');
  const [projectRolesError, setProjectRolesError] = useState('');
  const [projectFeaturesError, setProjectFeaturesError] = useState('');
  const [projectGithubLinkError, setProjectGithubLinkError] = useState('');
  const [projectLiveLinkError, setProjectLiveLinkError] = useState('');
  const [projectTechStacksError, setProjectTechStacksError] = useState('');



  const [editProjectDataIndex, setEditProjectDataIndex] = useState(-1)

  const [projectData, setProjectData] = useState([]);

  const handleOpenProjectForm = () => {
    if (projectData.length == 2) {
      alert("You have already added two projects, can't add more");
      return;
    }
    
    setProjectTitle("");
    setProjectFeatures("")
    setProjectCollaborated(false);
    setProjectGithubLink("");
    setProjectLiveLink("");
    setProjectRoles("");
    setProjectTechStacks("");
    setProjectIntro("");
    setOpenProjectForm(true);
  };
  
  const handleCloseProjectForm = () => {
    setOpenProjectForm(false);
  };

  const addProject = () => {
    if (projectTitle.length == 0) {
      setProjectTitleError("Title field can't be blank");
      return;
    }
    if (projectIntro.length == 0) {
      setProjectIntroError("Project about section can't be blank");
      return;
    }
    if (!isGithubUrl(projectGithubLink)) {
      setProjectGithubLinkError("Github repository link should be a valid url");
      return;
    }
    if (!validateUrl(projectLiveLink)) {
      setProjectLiveLinkError("Project live link should be a valid url");
      return;
    }
    if (projectFeatures.length == 0) {
      setProjectFeaturesError("Project features section can't be blank");
      // alert("Project features section can't be blank")
      return;
    }
    var prFeatures = projectFeatures.split("\n");
    if (prFeatures.length > 3) {
      setProjectFeaturesError("Maximum you can add 3 points in features of Project");
      // alert("Maximum you can add 3 points in features of Project");
      return;
    }
    if (projectRoles.length == 0) {
      setProjectRolesError("Project roles section can't be blank");
      // alert("Project roles section can't be blank")
      return;
    }
    var prRoles = projectRoles.split("\n");
    if (prRoles.length > 3) {
      setProjectRolesError("Maximum you can add 3 points in roles of Project");
      // alert("Maximum you can add 3 points in roles of Project");
      return;
    }
    if (projectTechStacks.length < 1) {
      setProjectTechStacksError("Select atleast one techstack");
      // alert("Select atleast one techstack");
      return;
    }


    for(var x of projectTechStacks)
    {
      studentTechStackSet.add(x)
    }
    setStudentTechStacks([...studentTechStackSet])

    // // console.log(projectTechStacks)
    // setStudentTechStacks([...new Set(projectTechStacks)])
    // projectTechStacks.forEach(el=>{
    //   if(!studentTechStacks.includes(el))
    //   {
    //     // if(studentTechStacks.length == 0)
    //     // {
    //     //   setStudentTechStacks([el]);
    //     // }
    //     // else
    //     // setStudentTechStacks([...studentTechStacks, el]);
    //   }
    // })
    // console.log(projectTechStacks)
    // console.log(studentTechStacks)

    displayProjectDetails()
    setOpenProjectForm(false)
  }


  const displayProjectDetails = () => {
    if (editProjectDataIndex == -1) {
      let temp = {
        "name": projectTitle,
        "description": projectIntro,
        "gitLink": projectGithubLink,
        "liveLink": projectLiveLink,
        "features": projectFeatures.split("\n"),
        "areasOfResp": projectRoles.split("\n"),
        "solo": projectCollaborated,
        "techStack": projectTechStacks
      }

      setProjectTitle("");
      setProjectFeatures("")
      setProjectCollaborated(false);
      setProjectGithubLink("");
      setProjectLiveLink("");
      setProjectRoles("");
      setProjectTechStacks("");
      setProjectIntro("");

      setProjectData([...projectData, temp]);
    }
    else {

      projectData[editProjectDataIndex].name = projectTitle;
      projectData[editProjectDataIndex].description = projectIntro;
      projectData[editProjectDataIndex].gitLink = projectGithubLink;
      projectData[editProjectDataIndex].liveLink = projectLiveLink;
      projectData[editProjectDataIndex].features = projectFeatures.split("\n");
      projectData[editProjectDataIndex].areasOfResp = projectRoles.split("\n");
      projectData[editProjectDataIndex].solor = projectCollaborated;

      projectData[editProjectDataIndex].techStacks = projectTechStacks;
    }
    setProjectCollaborated(false);
    // setProjectTechStacks([]);
    setDisplayProjectData(true);
  }

  
  const [openExperienceForm, setOpenExperienceForm] = useState(false);
  const [showExperienceRendering, setShowExperienceRendering] = useState(false);


  const [workCompany, setWorkCompany] = useState('');
  const [workDesignation, setWorkDesignation] = useState('');
  const [workStartDate, setWorkStartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');
  const [workRoles, setWorkRoles] = useState([]);

  const [workCompanyError, setWorkCompanyError] = useState('');
  const [workDesignationError, setWorkDesignationError] = useState('');
  const [workStartDateError, setWorkStartDateError] = useState('');
  const [workEndDateError, setWorkEndDateError] = useState('');
  const [workRolesError, setWorkRolesError] = useState('');  

  const [displayWorkExperienceData, setDisplayWorkExperienceData] = useState(false);

  const [workExperienceData, setWorkExperienceData] = useState([]);
  const [editExperienceDataIndex, setEditExperienceDataIndex] = useState(-1)

  const handleOpenExperienceForm = () => {
   if(workExperienceData.length == 2)
   {
     alert("You have already added two work experience, can't add more")
     return;
   }
   setWorkCompany("");
   setWorkDesignation("");
   setWorkEndDate("");
   setWorkRoles([]);
   setWorkStartDate(""); 
   setOpenExperienceForm(true);
  };

  const handleCloseExperienceForm = () => {
    setOpenExperienceForm(false);
  };



  var workRolesArray;
  const addExperience = () => {
    if (workCompany.length == 0) {
      setWorkCompanyError("Commpany/Organisation name can't be blank")
      return;
    }
    if (workDesignation.length == 0) {
      setWorkDesignationError("Designation can't be blank")
      return;
    }
    if (workStartDate.length == 0) {
      setWorkStartDateError("Start date can't be blank")
      return;
    }
    if (workEndDate.length == 0) {
      setWorkEndDateError("End date can't be blank")
      return;
    }
    if (workStartDate > workEndDate) {
      setWorkEndDateError("End date can not be earlier than start date");
      return;
    }
    if (workRoles.length == 0) {
      setWorkRolesError("Work experience roles can't be blank");
      return;
    }
    workRolesArray = workRoles.split("\n");
    if (workRolesArray.length > 3) {
      setWorkRolesError("Maximum you can add 3 points in work experience roles");
      return;
    }
    setOpenExperienceForm(false)
    displayExperienceDetails();
  }

  function displayExperienceDetails()
  {
    console.log(workExperienceData, editExperienceDataIndex)
    if (editExperienceDataIndex == -1) {
      let temp = {
        "organisation": workCompany,
        "position": workDesignation,
        "start": workStartDate,
        "end": workEndDate,
        "description": workRolesArray
      } 
      setWorkCompany("");
      setWorkDesignation("");
      setWorkEndDate("");
      setWorkRoles([]);
      setWorkStartDate("");
      // console.log(temp, workExperienceData);
      setWorkExperienceData([...workExperienceData, temp]);
    }
    else {
      workExperienceData[editExperienceDataIndex].organisation = workCompany;
      workExperienceData[editExperienceDataIndex].position = workDesignation;
      workExperienceData[editExperienceDataIndex].start = workStartDate;
      workExperienceData[editExperienceDataIndex].end = workEndDate;
      workExperienceData[editExperienceDataIndex].description = workRolesArray;
    }
    setDisplayWorkExperienceData(true);
  }

  
  function editExperienceButtonPress(index) {
    // console.log(index)
    setWorkCompany(workExperienceData[index].organisation);
    setWorkDesignation(workExperienceData[index].position);
    setWorkStartDate(workExperienceData[index].start);
    setWorkEndDate(workExperienceData[index].end);
    setWorkRoles(workExperienceData[index].description.join("\n"));

    setEditExperienceDataIndex(-1);
  }

  function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

  function editFormButtonPress(index) {
    console.log(index)
    setCourseTitle(educationData[index].course);
    setCollegeName(educationData[index].institute);
    setStartDate(educationData[index].start);
    setEndDate(educationData[index].end);

    setEditEducationDataIndex(index);
  }


  function editProjectButtonPress(index) {

    console.log(index)

    setProjectTitle(projectData[index].name);
    setProjectIntro(projectData[index].description);
    setProjectGithubLink(projectData[index].gitLink);
    setProjectLiveLink(projectData[index].liveLink);
    setProjectFeatures(projectData[index].features.join("\n"));
    setProjectRoles(projectData[index].areasOfResp.join("\n"));
    setProjectCollaborated(projectData[index].solo);
    setProjectTechStacks(projectData[index].techStack);

    setEditProjectDataIndex(index);
    // console.log(e)
  }


  async function submitForm() {
    if (!selectedFile && !profilevalidation) {
      alert("Please upload the profile image");
      return;
    }
    if (!profilevalidation) {
      var imgSize = Math.round(selectedFile.size / 1024); // In MB
      if (imgSize > profileMaxSize) {
        alert(
          "File is too big, please select a file of size less than " +
            Math.round(profileMaxSize / 1024) +
            " MB"
        );
        return;
      }
    }
    if (imgSize < profileMinSize && !profilevalidation) {
      alert(
        "File is too small, please select a file of size greater than " +
          profileMinSize +
          " KB"
      );
      return;
    }
    // console.log(selectedFile);
    if (studentName == "") {
      alert("Name field can't be blank");
      return;
    }
    if (tagline == "") {
      alert("tagline can't be blank");
      return;
    }
    var phoneno = /^\d{10}$/;
    if (!contact.match(phoneno)) {
      alert("Enter a valid contact number");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID)) {
      alert("Enter a valid Email ID");
      return;
    }
    if (address == "") {
      alert("Address can't be blank");
      return;
    }
    if (!validateUrl(portfolioLink)) {
      alert("Enter a valid portfolio link");
      return;
    }
    // if (!validateUrl(linkedinLink)) {
    //   alert("Enter a valid linkedin profile link")
    //   return
    // }
    if (linkedinLink == "") {
      alert("Enter valid linkedin username");
      return;
    }
    // if (!isGithubUrl(githubLink)) {
    //   alert("Enter a valid github profile link")
    //   return
    // }
    if (githubLink == "") {
      alert("Enter valid github username");
      return;
    }

    if (about.length < 100) {
      alert("write atleast 100 characters in about section");
      return;
    }
    if (educationData.length == 0) {
      alert("Add atleast one Education");
      return;
    }
    if (projectData.length == 0) {
      alert("Add atleast one Project");
      return;
    }
    if (studentTechStacks.length == 0) {
      alert("Add atleast one tech stack in your resume");
      return;
    }
    if (studentSoftSkills.length == 0) {
      alert("Add atleast one soft skill in your resume");
      return;
    }

    if (
      studentAccomplishment.length != 0 &&
      studentAccomplishment.length < 30
    ) {
      alert("There should be atleast 50 characters in Accomplishment");
      return;
    }

    var accomplishmentsTemp = studentAccomplishment.split("\n");
    if (accomplishmentsTemp.length > 3) {
      alert("Maximum you can add 3 accomplishments in your resume");
      return;
    }
    console.log(studentInterests);
    var interestsTemp = studentInterests.split(",");
    if (interestsTemp.length > 5) {
      alert("Maximum you can add 5 interests in your resume");
      return;
    }

    if (showExperienceRendering) {
      if (workExperienceData.length == 0) {
        alert(
          "You have selected to add work experience in your resume, but haven't added any. So either add atleast one work experience or off the toggle button"
        );
        return;
      }
    }

    const getBase64FromUrl = async (url) => {
      const data = await fetch(url);
      const blob = await data.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
    };
    const myImage = await getBase64FromUrl(croppedImage);

    setPageLoading(true);

    const postDetails = async () => {
      try {
        const data = new FormData();
        data.append("file", myImage);
        data.append("upload_preset", "resume-automation");
        data.append("cloud_name", "resume-automation");
        return fetch(
          "https://api.cloudinary.com/v1_1/resume-automation/image/upload",
          {
            method: "POST",
            body: data,
          }
        )
          .then((response) => response.json())
          .then((responseJson) => {
            return responseJson;
          });
        // .then((res) => res.json())
        // // .then((data) => {
        // //  return data.url.toString();
        // // })
      } catch (err) {
        console.log(err);
        alert(
          "Something went wrong, while uploading image, please contact the Admin."
        );
        return;
      }
    };

    var ProfileImg = preview;
    if (selectedFile) {
      ProfileImg = await postDetails();
    }
    // return;

    let educationArray = [];
    educationData.forEach((el) => {
      educationArray.push({
        course: el.course,
        institute: el.college,
        start: el.startDate,
        end: el.endDate,
      });
    });

    // // console.log(educationArray);

    let projectArray = [];
    // const UPDATED_TECH_STACK = new Set();

    projectData.forEach((el) => {
      // INSERTING DATA IN UPDATED_TECH_STACK
      // el.techStack &&
      //   el.techStack.forEach((mystack) => {
      //     UPDATED_TECH_STACK.add(mystack);
      //   });

      projectArray.push({
        name: el.title,
        description: el.introduction,
        gitLink: el.githubLink,
        liveLink: el.liveLink,
        features: el.features,
        techStack: el.techStack,
        areasOfResp: el.roles,
        solo: !el.collaboration,
        team: 4, // Needs clarification on it
      });
    });

    // setStudentTechStacks(null);
    // setStudentTechStacks([...UPDATED_TECH_STACK]);
    // console.log(UPDATED_TECH_STACK);

    // return;
    // // console.log(projectArray);
    ProfileImg =
      typeof ProfileImg == "string" ? ProfileImg : ProfileImg.url.toString();
    var linkdinUsernameURL = `https://www.linkedin.com/in/${linkedinLink}/`;
    var githubUsernameURL = `https://github.com/${githubLink}/`;
    var userId = JSON.parse(localStorage.getItem("loggedinUser"));
    var sendingPacket = {
      user: userId,
      personal: {
        profilePic: ProfileImg,
        name: studentName,
        tagLine: tagline,
        email: emailID,
        mob: contact,
        linkedin: linkdinUsernameURL,
        portfolio: portfolioLink,
        address: address,
        github: githubUsernameURL,
      },
      summary: about,
      projects: projectData,
      education: educationData,
      techSkills: studentTechStacks,
      softSkills: studentSoftSkills,
      accomplishments: accomplishmentsTemp,
      interests: interestsTemp,
    };

    if (showExperienceRendering) {
      sendingPacket["workEx"] = workExperienceData;
    } else {
      sendingPacket["workEx"] = [];
    }

    console.log("sending=", sendingPacket);

    // return

    axios
      .post("https://masairesumebuilder.herokuapp.com/resume", sendingPacket)
      .then(
        (response) => {
          console.log("response=", response);
          if (response.data.err) {
            setPageLoading(false);
            handleWrongLinkData(response.data);
            return;
          }

          navigate("/selecttemplate");
        },
        (error) => {
          alert(error);
          alert(
            "something went wrong while sending data to server, please contact admin"
          );
        }
      );
  }

  const handleWrongLinkData = (data) => {
    let wrongLinks = [];
    if (data.obj.github[1] === false) wrongLinks.push(data.obj.github[0]);
    if (data.obj.portfolio[1] === false) wrongLinks.push(data.obj.portfolio[0]);

    for (const SINGLE_PROJECT of data.obj.projects) {
      if (SINGLE_PROJECT.liveLink[1] === false)
        wrongLinks.push(SINGLE_PROJECT.liveLink[0]);
      if (SINGLE_PROJECT.gitLink[1] === false)
        wrongLinks.push(SINGLE_PROJECT.gitLink[0]);
    }

    wrongLinks = wrongLinks.map((onelink) => "-> " + onelink);

    alert("The following links are not valid: \n\n" + wrongLinks.join("\n"));
  };

  const [studentTechStacks, setStudentTechStacks] = useState([]);
  const [studentSoftSkills, setStudentSoftSkills] = useState([]);
  const [studentAccomplishment, setStudentAccomplishment] = useState("");
  const [studentInterests, setStudentInterests] = useState("");

  return (
    <>
    
    {pageLoading ? <img className='page-loading' src="https://i.pinimg.com/originals/a2/de/bf/a2debfb85547f48c3a699423ba75f321.gif" />:
    <div className='form-container'>
      <div className='header-section'>
        <div className='proflile-img'>
          <img src={preview} />
          <label for="upload">Upload Avatar
      <input type='file' id="upload" onChange={onSelectFile} /></label>
          {/* <div className="middle">
            <input type="file" onChange={onSelectFile} accept="image/png, image/jpeg" className="custom-file-input" />
          </div> */}
        </div>
        <Dialog open={openDialog} onClose={handleCloseForm}>
      <DialogContent>
  
      <div style={{"width":"35vw"}}>
        <div className="cropContainer">
          <Cropper
            image={selectedFile && URL.createObjectURL(selectedFile)}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={2.5 / 3}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className="controls">
          <div className="sliderContainer">
            <Typography
              variant="overline"
              // classes={{ root: classes.sliderLabel }}
              className='sliderLabel'
            >
              Zoom
            </Typography>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.01}
              aria-labelledby="Zoom"
              // classes={{ root: classes.slider }}
              className='slider'
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </div>
          <div className="sliderContainer">
            <Typography
              variant="overline"
              // classes={{ root: classes.sliderLabel }}
              className='sliderLabel'
            >
              Rotation
            </Typography>
            <Slider
              value={rotation}
              min={0}
              max={360}
              step={1}
              aria-labelledby="Rotation"
              // classes={{ root: classes.slider }}
              className='slider'
              onChange={(e, rotation) => setRotation(rotation)}
            />
          </div>
        </div>
        {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
      </div>
      </DialogContent>
      <DialogActions>
              <span className='cancel-btn'>
              <Button  variant="contained" onClick={handleCloseForm}>Cancel</Button>
              </span>
                <Button
            onClick={showCroppedImage}
            variant="contained"
            color="primary"
            // classes={{ root: classes.cropButton }}
        className='cropButton'
          >
            Crop Image
          </Button>
              </DialogActions>
      </Dialog>
      
        <div className='basic-input'>
          <div className='name-and-tagline'>
            <input value={studentName} onInput={e => setStudentName(e.target.value)} type={"text"} placeholder={"Enter your full name *"} />
            <input value={tagline} onInput={e => setTagline(e.target.value)} type={"text"} placeholder={"Enter your profile tagline *"} />
          </div>
          <hr />
          <div className='social-media-links'>
            <div>
              <input value={contact} onInput={e => setContact(e.target.value)} id='contact-input' type={"number"} placeholder={"Contact Number *"} />
            </div>
            <div>
              <input value={portfolioLink} onInput={e => setPortfolioLink(e.target.value)} id='portfolio-url-input' type={"url"} placeholder={"Portfolio Url *"} />
            </div>
            <div>
              <input value={emailID} onInput={e => setEmailID(e.target.value)} id='email-id-input' type={"email"} placeholder={"Email ID *"} />
            </div>
            <div>
              <input value={linkedinLink} onInput={e => setLinkedinLink(e.target.value)} id='linkedin-url-input' type={"url"} placeholder={"Linkedin Username *"} />
            </div>
            <div>
              <input value={address} onInput={e => setAddress(e.target.value)} id='address-input' type={"text"} placeholder={"Address *"} />
            </div>
            <div>
              <input value={githubLink} onInput={e => setGithubLink(e.target.value)} id='github-url-input' type={"url"} placeholder={"Github Username *"} />
            </div>
          </div>
        </div>
        <div className='input2'>
          <textarea value={about} onInput={e => setAbout(e.target.value)} placeholder={"Enter your about section (maximum 300 characters) *"} maxLength={"300"} ></textarea>
        </div>
      </div>
      <hr />
      <div className='footer-section'>
        <div className='education-form'>
          <Button className='add-btn' variant="outlined" onClick={handleOpenEducationForm}>
            Add Education
          </Button>
          <Dialog open={openEducationForm} onClose={handleCloseEducationForm}>
            <DialogTitle
            // style={{"textAlign":"center"}}
            >Add Education</DialogTitle>
            <DialogContent>
              <TextField
                value={courseTitle} onInput={e => { setCourseTitle(e.target.value); setCourseTitleError('') }}
                helperText={courseTitleError}
                error={courseTitleError}
                inputProps={{ maxLength: courseTitleMaxLength }}
                autoFocus
                margin="dense"
                id="course-title"
                label={courseTitleLabel}
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                value={collegeName} onInput={e => { setCollegeName(e.target.value); setCollegeNameError('') }}
                inputProps={{ maxLength: collegeTitleMaxLength }}
                error={collegeNameError}
                helperText={collegeNameError}
                margin="dense"
                id="college-name"
                label={collegeTitleLabel}
                type="text"
                fullWidth
                variant="outlined"
              />
              <div className='start-end-date'>
                <TextField
                  value={startDate} onInput={e => { setStartDate(e.target.value); setStartDateError('') }}
                  margin="dense"
                  error={startDateError}
                  helperText={startDateError}
                  id="start-date"
                  label="Start Date*"
                  type="month"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  value={endDate} onInput={e => { setEndDate(e.target.value); setEndDateError('') }}
                  margin="dense"
                  error={endDateError}
                  helperText={endDateError}
                  id="end-date"
                  label="End Date*"
                  type="month"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEducationForm}>Cancel</Button>
              <Button onClick={addEducation}>Add</Button>
            </DialogActions>
          </Dialog>
          {displayEducationData ?
            <div className="display-education-cont">
              {educationData.map((el, index) => (
                <div className='display-education-section'>
                  <p>{el.course}</p>
                  <p><span>from</span> {el.institute}</p>
                  <p>( {el.start} - {el.end} )</p>
                  <div className='edit-delete-buttons'>
                    <Fab onClick={() => {
                      setEditEducationDataIndex(index);
                      editFormButtonPress(index);
                      // console.log(educationData, editEducationDataIndex )
                      setOpenEducationForm(true);
                    }} color="primary" size='small' aria-label="edit">
                      <EditIcon />
                    </Fab>
                    &nbsp;&nbsp;
                    <Fab onClick={() => {
                      var temp = [...educationData];
                      temp.splice(index, 1);
                      setEducationData(temp);
                    }} color="error" size='small' aria-label="delete">
                      <DeleteIcon />
                    </Fab>
                  </div>
                </div>
              ))}
            </div>
            : ""}
        </div>
        <div className='project-form'>
          <Button className='add-btn' variant="outlined" onClick={handleOpenProjectForm}>
            Add Project
          </Button>
          <Dialog open={openProjectForm} onClose={handleCloseProjectForm}>
            <DialogTitle>Add Project</DialogTitle>
            <DialogContent>
              <TextField
                value={projectTitle} onInput={e => {
                  setProjectTitle(e.target.value);
                  setProjectTitleError('');
                }}
                helperText={projectTitleError}
                error={projectTitleError}
                size="small"
                inputProps={{ maxLength: projectTitleMaxLength }}
                autoFocus
                margin="dense"
                id="project-title"
                label={projectTitleLabel}
                type="text"
                fullWidth
                variant="outlined"
              />
               <TextField
                value={projectIntro}  onInput={e => {
                  setProjectIntro(e.target.value);
                  setProjectIntroError('');
                }}
                helperText={projectIntroError}
                error={projectIntroError}
                inputProps={{ maxLength: projectIntroMaxLength }}
                margin="dense"
                id="name"
                label={projectIntroLabel}
                type="text"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
              />
              <TextField
                value={projectGithubLink}  onInput={e => {
                  setProjectGithubLink(e.target.value);
                  setProjectGithubLinkError('');
                }}
                helperText={projectGithubLinkError}
                error={projectGithubLinkError}
                size="small"
                margin="dense"
                id="name"
                label="Enter your project github repo link"
                type="url"
                fullWidth
                variant="outlined"
              />
              <TextField
                value={projectLiveLink}  onInput={e => {
                  setProjectLiveLink(e.target.value);
                  setProjectLiveLinkError('');
                }}
                helperText={projectLiveLinkError}
                error={projectLiveLinkError}
                size="small"
                margin="dense"
                label="Enter your project live link"
                id="standard-basic" type="url" variant="outlined"
                fullWidth
              />
              <TextField
                size="small"
                value={projectFeatures} onInput={e => {setProjectFeatures(e.target.value);  setProjectFeaturesError('');
              }}
              helperText={projectFeaturesError}
              error={projectFeaturesError}
                inputProps={{ maxLength: projectFeaturesMaxLength }}
                margin="dense"
                multiline
                rows={3}
                label={projectFeaturesLabel}
                id="standard-basic" type="url" variant="outlined"
                fullWidth
              />
              <TextField
                size="small"
                value={projectRoles} onInput={e => {setProjectRoles(e.target.value);  setProjectRolesError('');
              }}
              helperText={projectRolesError}
              error={projectRolesError}
                multiline
                rows={3}
                inputProps={{ maxLength: projectRolesMaxLength }}
                margin="dense"
                label={projectRolesLabel}
                id="standard-basic" type="url" variant="outlined"
                fullWidth
              />
              <FormGroup>
                <FormControlLabel control={<Switch checked={projectCollaborated} onChange={(e) => { setProjectCollaborated(e.target.checked) }} />} label="Was it a Collaborative project?" />
              </FormGroup>
              <Autocomplete
                onChange={(option) => {
                  if (option.target.innerText) {
                    setProjectTechStacks([...projectTechStacks, option.target.innerText])
                    setProjectTechStacksError("");
                    // tagsArr.push(option.target.innerText);
                    // if (studentTechStacks.length === 5) {
                    //   console.log(studentTechStacks.length);
                    //   setMaxTechStacksRendering(true);
                    // }
                    // console.log(projectTechStacks);
                  }

                }}
                // readOnly={maxTechStacksRendering ? true : false}
                size="small"
                style={{ marginTop: "8px" }}
                multiple
                
            defaultValue={typeof(projectTechStacks) == "string" ? [] : projectTechStacks}
                id="tags-outlined"
                options={techStacks}

                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={projectTechStacksError}
          helperText={projectTechStacksError}
                    label="Select the tech stacks of your project (choose maximum 5)"
                  />
                )}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseProjectForm}>Cancel</Button>
              <Button onClick={addProject}>Add</Button>
            </DialogActions>
          </Dialog>
          {displayProjectData ?
            <div className="display-project-cont">
              {projectData.map((el, index) => (
                <div className='display-project-section'>
                  <p className='title'>{el.name}</p>
                  <p className='intro'>{el.description}</p>
                  <p className='features'><b>Features : </b>{el.features.join(". ")}</p>
                  <p className='roles'><b>Roles : </b>{el.areasOfResp.join(". ")}</p>
                  <p className='collaboration'><b>Collaboration : </b>{el.solo ? "Yes" : "No"}</p>
                  <p className='techStacks'><b>Techstacks : </b>{el.techStack.join(", ")}</p>
                  <Link className='git-link' href={el.gitLink} target="_blank" >
                    <GitHubIcon />
                  </Link>  &nbsp;&nbsp; <Link className='live-link' href={el.liveLink} target="_blank" >
                    <LanguageIcon />
                  </Link>
                  <div className='edit-delete-buttons'>
                    <Fab onClick={() => {
                      setEditProjectDataIndex(index);
                      editProjectButtonPress(index);
                      setOpenProjectForm(true);
                    }} color="primary" size='small' aria-label="edit">
                      <EditIcon />
                    </Fab>
                    &nbsp;&nbsp;
                    <Fab onClick={() => {
                      var temp = [...projectData];
                      temp.splice(index, 1);
                      setProjectData(temp);
                    }} color="error" size='small' aria-label="delete">
                      <DeleteIcon />
                    </Fab>
                  </div>
                </div>
              ))}
            </div>
            : ""}
        </div>
        <div className='accomplishment-cont'>

          <Autocomplete
            // onChange={(option) => {
            //   if (option.target.innerText) {
            //     setStudentTechStacks([...studentTechStacks, option.target.innerText])
            //     // tagsArr.push(option.target.innerText);
            //     // if (projectTechStacks.length === 5) {
            //     //   console.log(projectTechStacks.length);
            //     //   setMaxTechStacksRendering(true);
            //     // }
            //     // console.log(projectTechStacks);
            //   }

            // }}
            // readOnly={maxTechStacksRendering ? true : false}
            size="small"
            readOnly
            style={{ marginTop: "8px" }}
            multiple
            id="tags-outlined"
            options={techStacks}
            value={studentTechStacks}
            // getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tech Stacks (will be auto populated from projects)"
              />
            )}
          />

          <Autocomplete
            onChange={(option) => {
              if (option.target.innerText) {
                setStudentSoftSkills([...studentSoftSkills, option.target.innerText])
              }

            }}
            size="small"
            style={{ marginTop: "16px" }}
            multiple
            id="tags-outlined"
            defaultValue={studentSoftSkills}
            options={softSkills}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Soft Skills *"
              />
            )}
          />

          <TextField
            size="small"
            style={{ marginTop: "16px" }}
            value={studentAccomplishment} onInput={e => setStudentAccomplishment(e.target.value)}
            inputProps={{ maxLength: "200" }}
            margin="dense"
            multiline
            rows={3}
            label={"Accomplisments, each in new line (maximum 150 characters)"}
            id="standard-basic" type="url" variant="outlined"
            fullWidth
          />

          <TextField
            size="small"
            style={{ marginTop: "10px" }}
            value={studentInterests} onInput={e => setStudentInterests(e.target.value)}
            inputProps={{ maxLength: "100" }}
            margin="dense"
            multiline
            rows={2}
            label={"Interests, each separated by (,) (maximum 100 characters)"}
            id="standard-basic" type="url" variant="outlined"
            fullWidth
          />

        </div>
      </div>
     <div style={{"textAlign":"center", "margin-top":"20px"}}>
     <FormControlLabel control={<Switch checked={showExperienceRendering} onChange={(e) => { setShowExperienceRendering(e.target.checked) }} />} label="Do you want to add work experience in your resume?" />
     {!showExperienceRendering?"":
      <div className='work-experience-cont'>
           <Button className='add-btn' variant="outlined" onClick={handleOpenExperienceForm}>
            Add Work Experience
          </Button>
          <Dialog open={openExperienceForm} onClose={handleCloseExperienceForm}>
            <DialogTitle>Add Work Experience</DialogTitle>
            <DialogContent>
              <TextField
                value={workCompany} onInput={e => {
                  setWorkCompany(e.target.value);
                  setWorkCompanyError('');
                }}
                helperText={workCompanyError}
                error={workCompanyError}
                size="small"
                inputProps={{ maxLength: "50"}}
                autoFocus
                margin="dense"
                label={"Company/Organisation Name *"}
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
               value={workDesignation} onInput={e => {
                 setWorkDesignation(e.target.value);
                 setWorkDesignationError('');
               }}
               helperText={workDesignationError}
               error={workDesignationError}
               size="small"
               inputProps={{ maxLength: "20"}}
               margin="dense"
               label={"Designation in company *"}
               type="text"
               fullWidth
               variant="outlined"
             />
             
             <div className='start-end-date experience'>
             <TextField
              value={workStartDate} onInput={e => {
                setWorkStartDate(e.target.value);
                setWorkStartDateError('');
              }}
              helperText={workStartDateError}
              error={workStartDateError}
              size="small"
              margin="dense"
              label={"Start date *"}
              InputLabelProps={{
                shrink: true,
              }}
              type="month"
              fullWidth
              variant="outlined"
            /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
             value={workEndDate} onInput={e => {
               setWorkEndDate(e.target.value);
               setWorkEndDateError('');
             }}
             helperText={workEndDateError}
             error={workEndDateError}
             size="small"
             margin="dense"
             label={"End date *"}
             InputLabelProps={{
              shrink: true,
            }}
             type="month"
             fullWidth
             variant="outlined"
           />
             </div>
             <TextField
               value={workRoles} onInput={e => {
                 setWorkRoles(e.target.value);
                 setWorkRolesError('');
               }}
               helperText={workRolesError}
               error={workRolesError}
               size="small"
               inputProps={{ maxLength: "400"}}
               margin="dense"
               label={"Roles in the company, each in new line (maximum 400 characters) *"}
               type="text"
               fullWidth
               multiline
               rows={3}
               variant="outlined"
             />
              </DialogContent>
              <DialogActions>
              <Button onClick={handleCloseExperienceForm}>Cancel</Button>
              <Button onClick={addExperience}>Add</Button>
            </DialogActions>
            </Dialog>

            {displayWorkExperienceData ?
            <div className="display-education-cont">
              {workExperienceData.map((el, index) => (
                <div className='display-education-section'>
                <p>{el.organisation}</p>
                  <p>as {el.position}</p>
                  <p>( {el.start} - {el.end} )</p>
                  <div><b>Job Description</b>
                  <ul className="work-exp-lists">
                      {el.description.map((elm)=>{
                         return <li>{elm}</li>
                      })}
                    </ul>
                  </div>
                  <div className='edit-delete-buttons'>
                    <Fab onClick={() => {
                      setEditExperienceDataIndex(index);
                      editExperienceButtonPress(index);
                      setOpenExperienceForm(true);
                    }} color="primary" size='small' aria-label="edit">
                      <EditIcon />
                    </Fab>
                    &nbsp;&nbsp;
                    <Fab onClick={() => {
                      var temp = [...workExperienceData];
                      temp.splice(index, 1);
                      setWorkExperienceData(temp);
                    }} color="error" size='small' aria-label="delete">
                      <DeleteIcon />
                    </Fab>
                  </div>
                </div>
              ))}
            </div>
            : ""}
        </div>
      }
       </div>        
      <div className='submit-btn-cont'>
        <Button onClick={submitForm} className='genrate-resume-btn' color="success" variant="contained" endIcon={<ChevronRightIcon />}>
          Generate Resume
        </Button>
      </div>
     
    </div>
  }
  </>
  )
}

export default Form
