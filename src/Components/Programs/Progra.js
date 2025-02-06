import React from 'react'
import './Program.css'
import Programs1 from '../../assets/program1.png'
import Programs2 from '../../assets/program2.png'
import Program3 from '../../assets/program3.png'
import Degree from '../Programs/Degree.png'
import MasterDegree from '../Programs/MasterDegree.png'
// import Post from '../Programs/Post.png'
import Post from '../Programs/Post.png'
const Progra = () => {
  return (
    <div className='programs'>

      <div className="program">
        <img src={Programs1} />
        <div className="Caption">
          <img src={Degree} />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Programs2} />
        <div className="Caption">
          <img src={MasterDegree} />
          <p>Masters Degree</p>

        </div>
      </div>
      <div className="program">
        <img src={Program3} />
        <div className="Caption">
          <img src={Post}/>
          <p>Post Graduation</p>

        </div>
      </div>
    </div>
  )
}

export default Progra;
