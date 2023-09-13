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
                <p className={styles.content}>There are many variations of passages of Lorem Ipsum available</p>
            </div>
            <div className={styles.inputsWrapper}>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='Name Surename' fullWidth sx={{
                        borderRadius: '10px'
                    }} />
                </div>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='Phone' sx={{
                        width: '489px',
                        mr: '35px',
                        borderRadius: '10px'
                    }} />
                    <TextField variant='outlined' label='City' sx={{
                        width: '489px',
                        borderRadius: '10px'
                    }} />
                </div>
                <div className={styles.inputLine}>
                    <TextField variant='outlined' label='E-mail' sx={{
                        borderRadius: '10px'
                    }} fullWidth />
                </div>
                <div className={styles.inputLine}>
                    <Button className={styles.cvBtn} variant='contained' sx={{
                        width: '489px',
                        height: '58px',
                        background: 'white',
                        border: '2px solid #B9B9B9',
                        color: '#00A5C7',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                        borderRadius: '10px'
                    }}>Upload your CV</Button>
                    <Button variant='contained' sx={{
                        width: '489px',
                        height: '58px',
                        borderRadius: '10px',
                        background: '#00A5C7',
                        color: '#FFF',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                    }}>Send Request</Button>
                </div>
            </div>
        </div >
    )
}
