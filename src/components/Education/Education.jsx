import './Education.css'

const Education = () => {
    return (
        <section>
            <div id="education">
                <h2>Education</h2>
                    <table>
                        <tr>
                            <th style={{width: "20%"}}>Date</th>
                            <th> Program</th>
                        </tr>
                        <tr>
                            <td>2023 - Current</td>
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