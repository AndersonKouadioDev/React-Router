import React, {useState} from 'react';
import "./movies.css";


const FilterComponent = (props) => {
  
  const {keyword, setKeyword}= props;
 const [show,showState] =useState(-1);
 const handleShow = ()=>showState(show*-1) ;

  const handleShowMenu  =e=>{
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle('active');
  }
  const handleHideMenu  =e=>{
    e.preventDefault();
    document.querySelector(".navigation").classList.toggle('active');

    return show>0?handleShow():null;
  }

  return (
    <div className="container">
      <nav className="nav row">
      <div className="navigation">
        <i className=' menu_icon bi bi-list'  onClick={handleShowMenu}></i>
        <div className="els">
          <span style={{'--i':1, '--x':-1,'--y':0,}} onClick={handleHideMenu}><i className='bi bi-x-circle'></i></span>
          <span style={{'--i':2, '--x':0,'--y':0,}} data-bs-toggle="modal" data-bs-target="#exampleModal" ><i className='bi bi-plus-circle'></i></span>
          <span style={{'--i':3, '--x':1,'--y':0,}}  onClick={handleShow}><i className='bi bi-filter-circle'></i></span>
        </div>
      </div>
      {show>0 ?<form className="d-flex col-md-2 col-12">
        <input className="form-control me-2" type="search" value={keyword} onChange={(e)=> setKeyword(e.target.value)} placeholder="Filter by rate or name" aria-label="Search"/>
      </form> : null}
      </nav>
    </div>
  );
};


const Modal = ()=>{
  return (
    <div>
     
    </div>
  );
}
const Filter  = React.memo(FilterComponent)
export default Filter;