import HomeHeaderContent from '../homeheadercontent/homeheadercontent';
import { HeaderContentFrom } from '@/models/enums/headercontent';
import { IHeaderContentProps } from '@/models/interfaces/headercontent';

import styles from './headercontent.module.css';

export function HeaderContent({ from, trainingName }: IHeaderContentProps) {

    function renderContent(): JSX.Element {
        let content: JSX.Element;

        if (from === HeaderContentFrom.HOME) {
            content = (
                <div className={styles.headerCarouselDiv}>
                    <HomeHeaderContent />
                </div>
            );
        } else if (from === HeaderContentFrom.ALLTRAININGS || from === HeaderContentFrom.CAREER) {
            content = (
                <div className={`${styles.titleAndContentWrapper} container`}>
                    <h1 className={styles.title}>{from === HeaderContentFrom.ALLTRAININGS ? 'About PADC' : 'Find your'} <span className={styles.selectedWordInTitle}>{from === HeaderContentFrom.ALLTRAININGS ? 'Trainings' : 'Career'}</span></h1>
                    <p className={styles.content}>
                        {from === HeaderContentFrom.ALLTRAININGS ?
                            'The PADC Academy began in the Fall of 2020, by our Co-Founders Tigran Barseghyan and Radik Poghossian taught at PADC for 2 years and ran the Education Academy for most of their time here. PADC Academie is designed to function as small-schools-within-a-school for at-risk students and other students looking for a more personal educational experience. Our Academy provides individual teacher-to-student support, a dedicated team of teachers and support staff, cross-curricular units and projects, and a focus on developing life-skills.'
                            :
                            'At PADC, we understand that our success is built on the skills and talent of our employees. We strive to create a dynamic and supportive work environment that encourages personal and professional growth. As a rapidly growing IT company, we are always looking for talented individuals to join our team. We offer a range of career opportunities across departments, from software development and data analysis to project management and customer support. Whether you\'re just starting your career or looking to take the next step, we believe that PADC is the perfect place for you to grow and succeed. Our commitment to continuous learning and development means that you will have access to the training and resources you need to reach your full potential. We are proud of our inclusive and diverse workplace, and believe that different perspectives and experiences make us stronger. We welcome applicants of all backgrounds and experiences, and are committed to providing equal employment opportunities to all employees and applicants. Join us today and be a part of a team that is shaping the future of technology. We can\'t wait to see what you\'ll bring to the table. To apply, please visit our careers page and submit your resume and cover letter. We look forward to hearing from you!'
                        }
                    </p>
                </div>
            );
        }
        else if (from === HeaderContentFrom.SINGLETRAINING) {
            content = (
                <div className={`${styles.titleAndContentWrapper} container`}>
                    <h1 className={styles.title}>{trainingName}</h1>
                    <p className={styles.content}>Since 2020, PADC organizes bunch of training for different stacks: Web/Mobile development, Manual QA, Automation QA, DevOps Engineering, Software Engineering, etc… The duration of the training is different: depending on the stack. Here it is the short list of the stack: Web Development: HTML/CSS, JavaScript, TypeScript, Angular, ReactJS, NestJS Mobile Development: HTML/CSS, JavaScript, React Native Software Engineering: Linux, Bash Scripting, Python, C++, Qt DevOps: Linux, Python, Jenkins, Docker, K8s, GitLab CI/CD, GitHub Actions, Terraform, Ansible, etc… QA: QA basics, principles, Python, Selenium, Tools(Jira, Git, etc…)</p>
                </div>
            );
        } else {
            content = <></>;
        }

        return (
            <>
                {content}
            </>
        );
    }

    return renderContent();
}