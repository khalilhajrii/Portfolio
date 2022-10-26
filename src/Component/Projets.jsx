import React from 'react';
import projectdata from '../data/projectdata.json'
const Projets = () => {
    return (
        <div className='row background'>
            <div className='heading'>
                <h3>PROJECTS</h3>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators"
                            data-slide-to={0}
                            className="active"/>
                        <li data-target="#carouselExampleIndicators"
                            data-slide-to={1}/>
                        <li data-target="#carouselExampleIndicators"
                            data-slide-to={2}/>
                    </ol>
                    <div className="carousel-inner">
                        {projectdata.projet.items.map((item)=>{
                        return(
                            <div>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={process.env.PUBLIC_URL + item.img} alt="First slide"/>
                        </div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>CUSTOMER BANKING DASHBOARD</h5>
                            <p>KKKKK</p>
                            <button className='btn btn-success'><i class='bx bxl-github'></i></button>
                        </div>
                        </div>
                      )  })}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Projets;
