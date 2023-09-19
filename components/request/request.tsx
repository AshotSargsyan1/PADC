'use client'
import { TextField } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form";

import { IFormForJoin } from '../../models/interfaces/react-hook-form'
import styles from './request.module.css'

export function Request() {

    const { register, handleSubmit, formState, getValues, watch, resetField } = useForm<IFormForJoin>({
        mode: 'onChange'
    });
    const { errors } = formState
    watch('file')

    const onSubmit: SubmitHandler<IFormForJoin> = (data: IFormForJoin) => console.log(getValues('file'))

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}><span className={styles.selectedWordInTitle}>JOIN</span> US</h2>
                <hr className={styles.hr2} />
            </div>
            <div className={styles.contentDiv}>
                <p className={styles.content}>Let's Meet… Coffee Is On Us :&#41;</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputsWrapper}>
                    <div className={styles.inputLine}>
                        <TextField variant='outlined' label='Name Surename' fullWidth error={!!errors.name} {...register("name", { required: 'Name and surename is required' })} helperText={errors.name?.message} />
                    </div>
                    <div className={styles.inputLine}>
                        <TextField variant='outlined' label='Phone' fullWidth error={!!errors.phone} {...register('phone', {
                            required: 'Phone is required', pattern: {
                                value: /^[0-9+-]+$/,
                                message: 'The phone number must contain only the "+" symbol and numbers'
                            }
                        })} helperText={errors.phone?.message} />
                    </div>
                    <div className={styles.inputLine}>
                        <TextField variant='outlined' label='Address' fullWidth error={!!errors.address} {...register('address', { required: 'Address is required' })} helperText={errors.address?.message} />
                    </div>
                    <div className={styles.inputLine}>
                        <TextField variant='outlined' label='E-mail' {...register('email', {
                            required: 'Email is required', pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email format'
                            }
                        })} helperText={errors.email?.message} fullWidth error={!!errors.email} />
                    </div>
                    {!!getValues('file')?.[0]?.name && <div className={styles.fileNameShowDiv}>
                        <p className={styles.fileName}>{getValues('file')[0].name}</p>
                        <button type='button' onClick={() => {
                            resetField("file")
                        }} className={styles.removeFileBtn}>X</button>
                    </div>}
                    <div className={styles.inputLine}>
                        <div className={styles.inputLine}>
                            <label htmlFor="file" className={styles.uploadCvLabel}>Upload your CV</label>
                            <input type='file' id='file' className={styles.uploadCvInput} {...register('file')} />
                            <button type='submit' className={styles.sendBtn}>Send Request</button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}