//REACT
import React from 'react'
//MATERIAL UI
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { linearProgressClasses } from '@mui/material/LinearProgress';
//ICONE MATERIAL
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
//SPRING FRAMEWORK
import { useSpring, animated } from '@react-spring/web'
//CSS
import styles from '../Css/resume.module.css'
import resume from '../Css/resume.module.css'
//MATERIAL CSS
import { styled } from '@mui/material/styles';


function Resume() {

    const [progressReact, setProgressReact] = React.useState(0);
    const [progressJavascript, setProgressJavascript] = React.useState(0);
    const [progressJava, setProgressJava] = React.useState(0);
    const [progressSql, setProgressSql] = React.useState(0);
    const [progressSpring, setProgressSpring] = React.useState(0);
    const [progressC, setProgressC] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            setProgressReact((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 95);
            });
        }, 20);
    }, []);

    React.useEffect(() => {
        setInterval(() => {
            setProgressJavascript((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 95);
            });
        }, 20);
    }, []);


    React.useEffect(() => {
        setInterval(() => {
            setProgressJava((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 95);
            });
        }, 20);
    }, []);

    React.useEffect(() => {
        setInterval(() => {
            setProgressSql((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 70);
            });
        }, 20);
    }, []);

    React.useEffect(() => {
        setInterval(() => {
            setProgressSpring((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 95);
            });
        }, 20);
    }, []);

    React.useEffect(() => {
        setInterval(() => {
            setProgressC((oldProgress) => {
                const diff = 1;
                return Math.min(oldProgress + diff, 70);
            });
        }, 20);
    }, []);

    const springs1 = useSpring({
        from: { y: 0 },
        to: { y: 700 },
    })

    const springs2 = useSpring({
        from: { y: 0 },
        to: { y: 390 },

    })


    const BorderLinearProgressReact = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    const BorderLinearProgressJavascript = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#f5dd1b' : '#308fe8',
        },
    }));

    const BorderLinearProgressJava = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#f17020' : '#308fe8',
        },
    }));

    const BorderLinearProgressSql = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#7598c7' : '#308fe8',
        },
    }));

    const BorderLinearProgressSpring = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#6cb13d' : '#308fe8',
        },
    }));

    const BorderLinearProgressC = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === '#d9d9d9' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#05467e' : '#308fe8',
        },
    }));

    return (
        <div>
            <CardContent className={[styles.resumeBackground, styles.elementToFadeInAndOut]}>
                <Grid container>
                    <animated.div
                        style={{
                            width: 10,
                            marginLeft: 15,
                            height: 100,
                            background: '#ff6d6d',
                            borderRadius: 8,
                            ...springs1

                        }}
                    />
                    <Grid container spacing={4} style={{ marginTop: -130, marginLeft: 30 }}>
                        <Grid item lg={3.5} xs={2} >
                            <span className={styles.robotoFont} style={{ color: 'white', fontSize: 50 }}>Resume </span>
                        </Grid>
                        <Grid item lg={4} xs={4}>
                            <hr className={resume.lineaPortfolio}/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="flex-end" style={{ marginTop: 0.1 }} spacing={5} >
                        <Grid item xs={5} lg={5} style={{ marginTop: 10 }}>
                            <Grid container justifyContent="left" spacing={2} >
                                <SchoolOutlinedIcon style={{ color: '#f95054' }} fontSize='large' />
                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', fontSize: 25, marginTop: 2, marginLeft: 10 }}>Education</span>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} lg={1} style={{ marginTop: 10 }}>
                            <animated.div
                                style={{
                                    width: 10,
                                    height: 100,
                                    background: '#ff6d6d',
                                    borderRadius: 8,
                                    ...springs2
                                }}
                            />
                        </Grid>
                        <Grid item xs={5} lg={5} style={{ marginTop: 10 }}>
                            <Grid container justifyContent="left" spacing={2} >
                                <WorkOutlineOutlinedIcon style={{ color: '#f95054' }} fontSize='large' />
                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', fontSize: 25, marginTop: 2, marginLeft: 10 }}>Experience</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: -60 }}>
                        <Grid item lg={6} xs={6} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item lg={9} xs={6} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container style={{ marginBottom: 10 }}>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 25 }}>2014-2019</span>
                                            </Grid>
                                            <Grid item lg={12} xs={12} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 5, fontSize: 15 }}>Scuola superiore Geremia Piscopo</span>
                                            </Grid>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 25 }}>Arzano(NA)</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item lg={6} xs={6} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item lg={9} xs={6} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 25 }}>2021-NOW</span>
                                            </Grid>
                                            <Grid item lg={12} xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 17 }}>Software Engineer</span>
                                            </Grid>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 20 }}>Matrix Consulting Group Srl</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item lg={6} xs={6} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item lg={9} xs={6} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 25 }}>2018-2019</span>
                                            </Grid>
                                            <Grid item lg={12} xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 17 }}>It Essentials</span>
                                            </Grid>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 25 }}>Cisco</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item lg={6} xs={6} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item lg={9} xs={6} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 25 }}>2021-NOW</span>
                                            </Grid>
                                            <Grid item lg={12} xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 17 }}>Software Engineer</span>
                                            </Grid>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 25 }}>Accenture</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item lg={6} xs={6} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item lg={9} xs={6} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 25 }}>2018-2019</span>
                                            </Grid>
                                            <Grid item lg={12} xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 17 }}>C++</span>
                                            </Grid>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 25 }}>Cisco</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item lg={6} xs={6} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item lg={9} xs={6} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 25 }}>2017-2018</span>
                                            </Grid>
                                            <Grid item lg={12} xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 17 }}>Assistente Bagnante</span>
                                            </Grid>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 25 }}>FINN</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item lg={6} xs={6} >
                            <Grid container justifyContent="center" spacing={1} >
                                <Grid item lg={9} xs={6} >
                                    <Card elevation={3} className={styles.cardStyle}>
                                        <Grid container spacing={1} style={{ marginBottom: 10 }}>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 10 }}>
                                                <span className={styles.robotoFont} style={{ color: '#afafaf', marginLeft: 10, fontSize: 25 }}>2021-2021</span>
                                            </Grid>
                                            <Grid item lg={12} xs={12} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: 'white', marginLeft: 10, fontSize: 17 }}>Java Developer</span>
                                            </Grid>
                                            <Grid item lg={12} xs={6} style={{ marginTop: 5 }}>
                                                <span className={styles.robotoFont} style={{ fontWeight: 'bold', color: '#afafaf', marginLeft: 10, fontSize: 25 }}>Itconsulting</span>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent className={[styles.contenutoCardPrincipale2, styles.elementToFadeInAndOut]}>
                <Grid container>
                    <Grid item xs={6} lg={6}>
                        <Card style={{ backgroundColor: '#0d0d0d' }}>
                            <Grid item xs={6} lg={6} style={{ marginTop: 10 }}>
                                <Grid container justifyContent="center" spacing={2} >
                                    <span style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>Skills</span>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={6} lg={6}>
                        <Card style={{ backgroundColor: '#0d0d0d' }}>
                            <Grid item xs={6} lg={6} style={{ marginTop: 10 }}>
                                <Grid container justifyContent="center" spacing={2} >
                                    <span style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>Knowledges</span>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                {/* SKILLS */}
                <Grid container spacing={4} style={{ marginTop: 1 }}>
                    <Grid item xs={6} lg={6} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={12} >
                                <Grid container spacing={2}>
                                    <Grid item xs={6} lg={9} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>REACT</span>
                                    </Grid>
                                    <Grid item xs={6} lg={3} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>95%</span>
                                    </Grid>
                                </Grid>
                                <Box sx={{ width: '100%' }}>
                                    <BorderLinearProgressReact style={{ height: 5 }} variant="determinate" value={progressReact} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={12} >
                                <Grid container spacing={2}>
                                    <Grid item xs={6} lg={9} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>JAVASCRIPT</span>
                                    </Grid>
                                    <Grid item xs={6} lg={3} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>95%</span>
                                    </Grid>
                                </Grid>
                                <Box sx={{ width: '100%' }}>
                                    <BorderLinearProgressJavascript style={{ height: 5 }} variant="determinate" value={progressJavascript} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={12} >
                                <Grid container spacing={2}>
                                    <Grid item xs={6} lg={9} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>JAVA</span>
                                    </Grid>
                                    <Grid item xs={6} lg={3} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>95%</span>
                                    </Grid>
                                </Grid>
                                <Box sx={{ width: '100%' }}>
                                    <BorderLinearProgressJava style={{ height: 5 }} variant="determinate" value={progressJava} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={12} >
                                <Grid container spacing={2}>
                                    <Grid item xs={6} lg={9} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>SQL</span>
                                    </Grid>
                                    <Grid item xs={6} lg={3} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>70%</span>
                                    </Grid>
                                </Grid>
                                <Box sx={{ width: '100%' }}>
                                    <BorderLinearProgressSql style={{ height: 5 }} variant="determinate" value={progressSql} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={12} >
                                <Grid container spacing={2}>
                                    <Grid item xs={6} lg={9} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>SPRING</span>
                                    </Grid>
                                    <Grid item xs={6} lg={3} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>95%</span>
                                    </Grid>
                                </Grid>
                                <Box sx={{ width: '100%' }}>
                                    <BorderLinearProgressSpring style={{ height: 5 }} variant="determinate" value={progressSpring} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={12} >
                                <Grid container spacing={2}>
                                    <Grid item xs={6} lg={9} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>C++/C</span>
                                    </Grid>
                                    <Grid item xs={6} lg={3} >
                                        <span className={styles.skillsSpan} style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, marginLeft: 10, color: 'white' }}>70%</span>
                                    </Grid>
                                </Grid>
                                <Box sx={{ width: '100%' }}>
                                    <BorderLinearProgressC style={{ height: 5 }} variant="determinate" value={progressC} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* FINE SKILLS */}
                    {/* KNOWLEDGES */}
                    <Grid item xs={6} lg={6} >
                        <Grid container spacing={2}>
                            <Grid item xs={5} lg={6} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Javascript</span>
                                </Card>
                            </Grid>
                            <Grid item xs={5} lg={5} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Java</span>
                                </Card>
                            </Grid>
                            <Grid item xs={5} lg={5} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>React.js</span>
                                </Card>
                            </Grid>
                            <Grid item xs={5} lg={6} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Spring</span>
                                </Card>
                            </Grid>
                            <Grid item xs={5} lg={6} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Microsoft Excel</span>
                                </Card>
                            </Grid>
                            <Grid item xs={5} lg={6} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>HTML5</span>
                                </Card>
                            </Grid>
                            <Grid item xs={5} lg={5} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>C++/C</span>
                                </Card>
                            </Grid>
                            <Grid item xs={5} lg={7} >
                                <Card className={styles.knowledgesCard}>
                                    <span style={{ fontSize: 25, marginTop: 5, marginLeft: 10, color: '#484848' }}>Framework Spring</span>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* FINE KNOWLEDGES */}
                </Grid>



            </CardContent>
        </div>
    );
}

export default Resume;