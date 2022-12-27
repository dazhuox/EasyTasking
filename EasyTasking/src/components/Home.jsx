import React from 'react';

function Home() {
    return (
        <div className='container'>
            <div className='row' style={{marginTop:"3em"}}>
                <div className='col-12 col-md-6 border'>
                    <h2>
                        What is this Website?
                    </h2>
                    <br></br>
                    <p>
                        This website allows users to create interactive and helpful task lists to help them organize their time.
                    </p>
                    <p>
                        It can help students organize their work by allowing them to view, create, edit, and remove tasks from their lists is the objective of this website.
                    </p>
                    <p>
                        This is a private website made for a small group of friends.
                    </p>
                </div>
                <div className='col-12 col-md-6 border'>
                    <h2>
                        The Features of this Website
                    </h2>
                    <br></br>
                    <p>
                        Users are allowed to view their task lists, create new tasks that are added to that list, see the creator of the task, edit the task, change the color, and delete finished tasks.
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;