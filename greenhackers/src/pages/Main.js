import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import "../index.css";
import logo from '../imgs/logo.png';
import home from '../imgs/home.png';
import files from '../imgs/files.png';
// import sections from '../imgs/sections.png';
import history from '../imgs/history.png';
import search from '../imgs/Search.png';
import notification from '../imgs/Symbol.png';
import show from '../imgs/show.png';
import Setting from '../imgs/Setting.png';
import google from '../imgs/Google.png';
import departement from '../imgs/departement.png';
import profile from '../imgs/profile.png'
import Files from './Files'
import Dep from './Dep'
const Main = () => {
    const navigate = useNavigate();
    const [active , setActive] = useState([]);
    const changeActive = (index) =>{
        const newactive = [...active];
        newactive[index] = !newactive[index];
        setActive(newactive);
    };
    const cardsData = [
        {
            title: 'Working hours',
            imgSrc: google,
            content: [
                'bojaja hemad',
                'one day ago',
            ],
            paragraphs: [
                'To : me',
                'Good afternoon ,',
                'I would like to ask about the working hours of the Bab ezzouar agency during buisness days ?',
                'Cordially',
            ]
        },
        {
            title: 'Job application',
            imgSrc: google,
            content: [
                'Botajin karim',
                '2 days ago',
            ],
            paragraphs: [
                'To : Human Ressouces Departement',
                'Good morning ,',
                'I would like to apply for the Junior IT assistant position that you announced on Linkedin.',
                'You can find my CV attached to this email ,it contains everything that concerns my education' ,
                'experience and skills.',
                'I hope to hear a positive response.',
                'Cordially',
            ]
        },
        {
            title: 'Salary raise demand',
            imgSrc: google,
            content: [
                'DJELLOL Mohamed',
                'Human Ressources Departement',
                'one month ago',
            ],
            paragraphs: [
                'To : me',
                'Good afternoon ,',
                'I would like to ask about the working hours of the Bab ezzouar agency during buisness days ?',
                'Cordially',
            ]
        },
        {
            title: 'Website is down',
            imgSrc: google,
            content: [
                'KCC Oussama',
                'IT Departement',
                '2 days ago',
            ],
            paragraphs: [
                'To : me',
                'Good afternoon ,',
                'I would like to ask about the working hours of the Bab ezzouar agency during buisness days ?',
                'Cordially',
            ]
        },
        {
            title: 'Current offers',
            imgSrc: google,
            content: [
                'Sidali',
                'Sales Departement',
                '2 days ago',
            ],
            paragraphs: [
                'To : me',
                'Good afternoon ,',
                'I would like to ask about the working hours of the Bab ezzouar agency during buisness days ?',
                'Cordially',
            ]
        },
    ];
    const changePath1 = () =>{
        navigate("/main")
    };
    const changePath3 = () =>{
        navigate("/Dep");
        // console.log("goooooo");
    };
    const changePathh = () => {
        navigate("/files");  
        console.log("yesss");
      };
  return (
    <div className="main-container">
        <div className="side-bar">
            <div className="title_container">
            <img className="logo" src={logo}alt="" />
            <span className=" title1">
                            COptima
                        </span>
            </div>
            <div className="wrapper">
            <img className="logoBar" src={home} ></img>
            <button className="b f" onClick={changePath1}>Home</button>
            </div>
            <div className="wrapper">
            <img className="logoBar" src={files}></img>
            <button className="b " onClick={changePathh}>Files</button>
            </div>
            {/* <div className='wrapper'>
            <img className='logoBar' src={sections}></img>
            <button className='b '>Sections</button>
            </div> */}
            <div className='wrapper'>
            <img className='logoBar' src={profile}></img>
            <button className='b ' onClick={changePath3}>Employees</button>
            </div>
            <div className='wrapper'>
            <img className='logoBar' src={departement}></img>
            <button className='b '>Departements</button>
            </div>
            <div className='wrapper'>
            <img className='logoBar' src={departement}></img>
            <button className='b '>Social media</button>
            </div>
        </div>
        <div className='container'>
        <div className="topBar">
            <div className="search">
                <div className="explore_dev">
                    <img className="search" src={search}></img>
                    <span className="explore">explore</span>
                </div>
                <div className="circle">
                </div>
            </div>
            <div className="logos">
                <img className="notification" src={notification}></img>
                <button className="profile"><img src={Setting}></img></button>
            </div>
        </div>
        {cardsData.map((card, index) => (
        <div className="dropDown">
        <div onClick={() => changeActive(index)} className="cards">
            <div className="edge">
            <div className="container_card">
                <h1 className="car">{card.title}</h1>
                <img src={card.imgSrc} className='google_logo'></img>
            </div>
            {/* <p className='pp'>bojaja hemad</p>
            <p className='pp'>one day ago</p> */}
         {card.content.map((paragraph, idx) => (
                                    <p key={idx} className='pp'>{paragraph}</p>
                                ))}
            </div>
        </div>
        {active[index] && (
            <div className="edge">
                {/* <p className='nn'>To : me</p>
                <p className='nn'>Good afternoon ,</p>
                <p className='nn'>
I would like to ask about the working hours of the Bab ezzouar agency during buisness days ?</p>
                <p className='nn'>Cordially.</p>
                <p className='nn'></p> */}
                {card.paragraphs.map((paragraph , id)=>(
                    <p key={id} className='nn' style={{ wordWrap: 'break-word' }} >{paragraph}</p>
                ))}
            </div>
        )}
        </div>
        ))}
       
        </div>
      
    </div>
  );
}

export default Main;
