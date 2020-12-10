import React from 'react'

function About() {
    return (
        <>
            {/* About*/}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Weerayooth
                        <span className="text-primary">Manawanich</span>
                    </h1>
                    <h2 className="mb-3 mt-1">
                        <a href="#" className="typewrite" data-period={2000} data-type="[ &quot;I am Fullstack.&quot;, &quot;I am Developer.&quot;, &quot;I Love Design.&quot;, &quot;I Love to Photograph.&quot; ]">
                        </a>
                        <span className="wrap" />
                    </h2>
                    <div className="subheading mb-5"><i className="fas fa-map-marker-alt" />
                        <span className="myLocation" en>35/105 Phiboonsongkram Rd.· Suanyai, Muang · Nonthaburi</span>
                        {/* <a href="mailto:weerayooth.ma@gmail.com">weerayooth.ma@gmail.com</a> */}
                    </div>
                    <p className="lead mb-5">
                        A Software Developer graduated from Coding Bootcamp. Proficient with
                        HTML, CSS and JavaScript including with cutting edge web frameworks.
                        Strong problem-solving and fast learning skills. Strong
                        communication skills both verbal and writing.
                    </p>
                    {/* <div class="social-icons">
              <a
                class="social-icon"
                href="https://www.linkedin.com/in/weerayooth-manawanich-b065891b0/"
              ><i class="fab fa-linkedin-in"></i
              ></a>
              <a class="social-icon" href="https://github.com/WeerayoothM"
              ><i class="fab fa-github"></i
              ></a>
              <a
                class="social-icon"
                href="https://web.facebook.com/ohm.manawanich"
              ><i class="fab fa-facebook-f"></i
              ></a>
            </div>  */}
                    {/* <ul class="socials">
              <li>
                <a href="https://web.facebook.com/ohm.manawanich">
                  <i class="fab fa-facebook" aria-hidden="true"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/weerayooth-manawanich-b065891b0/">
                  <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a href="mailto:weerayooth.ma@gmail.com">
                  <i class="fab fa-google-plus-g" aria-hidden="true"></i>
                  <span>G-mail</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/WeerayoothM">
                  <i class="fab fa-github" aria-hidden="true"></i>
                  <span>GitHub</span>
                </a>
              </li> */}
                    <div className="socials mt-1">
                        <div>
                            <a href="https://web.facebook.com/ohm.manawanich">
                                <i className="fab fa-facebook" aria-hidden="true" />
                                <span>Facebook</span>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/weerayooth-manawanich-b065891b0/">
                                <i className="fab fa-linkedin-in" aria-hidden="true" />
                                <span>Linkedin</span>
                            </a>
                        </div>
                        <div>
                            <a href="mailto:weerayooth.ma@gmail.com">
                                <i className="fab fa-google-plus-g" aria-hidden="true" />
                                <span>G-mail</span>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/WeerayoothM">
                                <i className="fab fa-github" aria-hidden="true" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
