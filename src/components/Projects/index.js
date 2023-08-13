import React from 'react';
import movieDashboard from '../../assets/img/Project1.jpg';
import blogtopia from '../../assets/img/Project3.jpg';
import spoiledTomatillos from '../../assets/img/Project2B.jpg';

function Projects() {
    return (
        <div className="projects container mt-5" id='projects'>
            <h2>My Projects</h2>

            <div className="project-item mb-4">
                <img src={spoiledTomatillos} alt="Project 1" />
                <p>Spoiled Tomatillos: A cutting edge web application that allows users to provide their own inputs and reviews of their favourite contents</p>
                <div className="text-center">
                    <a href="https://github.com/TimeBytes/Movie-Dashboard" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">GitHub Repo</a>
                    <a href="https://mm-movie-review-4a048df21836.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success">Deployed Version</a>
                </div>
            </div>

            <div className="project-item mb-4">
                <img src={blogtopia} alt="Project 2" />
                <p>Blogtopia: An amazing app that allows users to share their thoughts by posting a blog or commenting on other's and exchanging their experiences</p>
                <div className="text-center">
                    <a href="https://github.com/Mahdi-Moradzadeh/myBlog" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">GitHub Repo</a>
                    <a href="https://blogtopia-c4f44af01b96.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success">Deployed Version</a>
                </div>
            </div>

            <div className="project-item mb-4">
                <img src={movieDashboard} alt="Project 3" />
                <p>Movie Dashboard: Using latest APIs making the search for your favourite shows and movies easier by finding their availibiltiy on the top streaming services</p>
                <div className="text-center">
                    <a href="https://github.com/Mahdi-Moradzadeh/movieReview" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">GitHub Repo</a>
                    <a href="[DEPLOYED LINK FOR PROJECT 3]" target="_blank" rel="noopener noreferrer" className="btn btn-success">Deployed Version</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
