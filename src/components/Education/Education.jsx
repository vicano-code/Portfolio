import './Education.css'

const Education = () => {
    return (
        <section className="education">
            <div id="education">
                <h2>Education</h2>
                    <table>
                        <tr>
                            <th style={{width: "20%"}}>Date</th>
                            <th> Program</th>
                        </tr>
                        <tr>
                            <td>Sep 2023 - Nov 2024</td>
                            <td> ALX Software Engineering Program</td>
                        </tr>
                        <tr>
                            <td>August 2022</td>
                            <td>Front End Development Libraries  (freeCodeCamp)</td>
                        </tr>
                        <tr>
                            <td>June 2022</td>
                            <td>JavaScript Algorithms and Data Structures (freeCodeCamp)</td>
                        </tr>
                        <tr>
                            <td>May 2022</td>
                            <td>Responsive Web Design (freeCodeCamp)</td>
                        </tr>
                        <tr>
                            <td>November 2021</td>
                            <td>IBM Data Science (Coursera)</td>
                        </tr>
                        <tr>
                            <td>2013 - 2015 </td>
                            <td>MSc Petroleum Engineering, University of Stavanger, Norway</td>
                        </tr>
                        <tr>
                            <td>2006 - 2010 </td>
                            <td>BEng Petroleum Engineering, Federal University of Technology Owerri, Imo State, Nigeria</td>
                        </tr>
                    </table>
                </div>
        </section>

    );
};

export default Education;