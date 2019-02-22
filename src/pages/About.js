import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'
import 'scss/aboutUs/index.scss'

const developers = [
  {
    name: 'Josaphat Tutor',
    position: 'Web Developer',
    img: '/images/jojo.jpg',
    company: 'DNAMICRO',
    links: {
      github: '',
      facebook: '',
      twitter: '',
    }
  },
  {
    name: 'Jasper Bernales',
    position: 'Web Developer',
    img: '/images/jasper.jpg',
    company: 'DNAMICRO',
    links: {
      github: '',
      facebook: '',
      twitter: '',
    }
  },
  {
    name: 'Bon Joseph Lazaga',
    position: 'Lead DevOps',
    img: '/images/jasper.jpg',
    company: 'DNAMICRO',
    links: {
      github: '',
      facebook: '',
      twitter: '',
    }
  },
  {
    name: 'Jose Adrian Buctuanon',
    position: 'Front End Developer',
    img: '/images/jab.jpg',
    company: 'DNAMICRO',
    links: {
      github: '',
      facebook: '',
      twitter: '',
    }
  }
]

const renderDevelopers = () => {
  return (
    <Fragment>
      { developers.map( item => (
        <div className='dev'>
          <div className='dev_dp'>
            <img 
              src={item.img} 
              alt={item.name}/>
          </div>

          <h1 className='dev_title'>{item.name}</h1>
          <p className='dev_position'>
            {item.position} at {item.company}
          </p>
          <div className='dev_links'>
            { Object.keys(item.links).map((link) => (
              <Link to={item.links[link]}>
                <i className={`wtfb wtf-${link}`}></i>
              </Link>
            ))}
          </div>

        </div>
      ))}
    </Fragment>
  )
}

const About = () =>  (
  <div className='page aboutPage'>
    <section>
      <div className='container'>
        <div className='row row-center row_header'>
          <div className='logos'>
            <img src='/images/react_logo.png' alt='' className='logo'/>
            <img src='/images/cebujs_logo.png' alt='' className='logo cebujs'/>
          </div>
          <h1 className='title'>
            The Project
          </h1>
        </div>
        <div className='row'>
          <div className='desc'>
            This project is a basic shirt eCommerce purchasing demo app 
            showcasing the latest react features , project 
            structure for small projects, Webpack build, Docker 
            build made for CebuJs members. The App is made for 
            educational purposes and is not based on current projects.
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='row row-center row_header'>
          <h1 className='title'>What's Inside?</h1>
        </div>
        <div className='row'>
          <ul className='checklist'>
            <li>React</li>
            <li>Webpack</li>
            <li>Eslint</li>
            <li>Docker Build</li>
            <li>Sass Build</li>
            <li>React Drag and Drop</li>
            <li>React lazy loader</li>
            <li>Basic Authentication</li>
            <li>Yarn</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='row row_header row-center'>
          <h1 className='title'>
            Developer
          </h1>
        </div>
        <div className='row row-center'>
          <div className="devs">
            { renderDevelopers() }
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
