import { Button, TextField } from '@mui/material'

import styles from './request.module.css'

export function Request() {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}>SEND REQUEST</h2>
                <hr className={styles.hr} />
            </div>
            <div className={styles.contentDiv}>
                <p className={styles.content}>Let's Meet… Coffee Is On Us :&#41;</p>
            </div>
            <div className={styles.inputsWrapper}>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='Name Surename' fullWidth sx={{
                        borderRadius: '10px',
                    }} />
                </div>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='Phone' sx={{
                        width: '50%',
                        mr: '35px',
                        borderRadius: '10px'
                    }} />
                    <TextField variant='outlined' label='City' sx={{
                        width: '50%',
                        borderRadius: '10px'
                    }} />
                </div>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='E-mail' sx={{
                        borderRadius: '10px'
                    }} fullWidth />
                </div>
                <div className={styles.inputLine}>
                    <button className={styles.cvBtn}>Upload your CV</button>
                    <button className={styles.sendBtn}>Send Request</button>
                </div>
            </div>
        </div >
    )
}


export function Request2() {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}><span className={styles.selectedWordInTitle}>JOIN</span> US</h2>
                <hr className={styles.hr2} />
            </div>
            <div className={styles.contentDiv}>
                <p className={styles.content}>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div className={styles.inputsWrapper}>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='Name Surename' fullWidth sx={{
                        borderRadius: '10px'
                    }} />
                </div>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='Phone' fullWidth sx={{
                        borderRadius: '10px'
                    }} />
                </div>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='City' fullWidth sx={{
                        borderRadius: '10px'
                    }} />
                </div>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='E-mail' sx={{
                        borderRadius: '10px'
                    }} fullWidth />
                </div>
                <div className={styles.inputLine}>
                    <div className={styles.inputLine}>
                        <button className={styles.cvBtn}>Upload your CV</button>
                        <button className={styles.sendBtn}>Send Request</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
