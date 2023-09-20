'use client'
import { TextField } from '@mui/material'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from 'react'

import { IFormForJoin } from '../../models/interfaces/react-hook-form'
import styles from './request.module.css'

export function Request() {

    const [isSending, setIsSending] = useState<boolean>(false);

    const { register, handleSubmit, formState, getValues, watch, resetField, reset, control } = useForm<IFormForJoin>({
        mode: 'onChange',
        defaultValues: {
            name: "",
            phone: "",
            address: "",
            email: ""
        }
    });

    const formData: FormData = new FormData()
    const { errors } = formState
    watch('file')

    const sendRequest = async (): Promise<void> => {
        setIsSending(true);

        for (const key in getValues()) {
            key === 'file'
                ? formData.append('file', getValues()[key][0])
                : formData.append(key, getValues()[key as keyof IFormForJoin]);
        }

        await fetch('https://api.padcllc.com/contact-requests', {
            method: 'POST',
            body: formData
        })
            .then(resp => {
                alert("Your request has been sent successfully")
                if (resp?.ok) {
                    reset({
                        name: "",
                        phone: "",
                        address: "",
                        email: "",
                        file: ""
                    })
                }
            })
            .catch(_ => alert("Something went wrong!"))
            .finally(() => {
                setIsSending(false)
            });
    }

    const onSubmit: SubmitHandler<IFormForJoin> = (): Promise<void> => sendRequest()

    const borderBottomStyle = {
        borderBottom: "2px solid #00A5C7",
        borderTop: "2px solid #E3E3E3",
        borderLeft: "2px solid #E3E3E3",
        borderRight: "2px solid #E3E3E3"
    }

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.titleDiv}>
                <h2 className={styles.title}><span className={styles.selectedWordInTitle}>JOIN</span> US</h2>
                <hr className={styles.hr2} />
            </div>
            <div className={styles.contentDiv}>
                <p className={styles.content}>Let's Meet… Coffee Is On Us :&#41;</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputsWrapper}>
                    <div className={styles.inputLine}>
                        <Controller
                            name='name'
                            control={control}
                            render={({ field }) => <TextField sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        ...borderBottomStyle
                                    }
                                }
                            }} {...field} variant='outlined' label='Name Surename' fullWidth error={!!errors.name} {...register("name", { required: 'Name and surename is required' })} helperText={errors.name?.message} />}
                        />
                    </div>
                    <div className={styles.inputLine}>
                        <Controller
                            name='phone'
                            control={control}
                            render={({ field }) => <TextField sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        ...borderBottomStyle
                                    }
                                }
                            }} {...field} variant='outlined' label='Phone' fullWidth error={!!errors.phone} {...register('phone', {
                                required: 'Phone is required', pattern: {
                                    value: /^[0-9+-]+$/,
                                    message: 'The phone number must contain only the "+" symbol and numbers'
                                }
                            })} helperText={errors.phone?.message} />
                            }
                        />
                    </div>
                    <div className={styles.inputLine}>
                        <Controller
                            name='address'
                            control={control}
                            render={({ field }) => <TextField sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        ...borderBottomStyle
                                    }
                                }
                            }} {...field} variant='outlined' label='Address' fullWidth {...register('address', { required: 'Address is required' })} helperText={errors.address?.message} error={!!errors.address} />}
                        />
                    </div>
                    <div className={styles.inputLine}>
                        <Controller
                            name='email'
                            control={control}
                            render={({ field }) => <TextField sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        ...borderBottomStyle
                                    }
                                }
                            }} {...field} variant='outlined' label='E-mail' fullWidth {...register('email', {
                                required: 'Email is required', pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email format'
                                }
                            })} helperText={errors.email?.message} error={!!errors.email} />}
                        />
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
                            <input type='file' id='file' accept=".pdf" className={styles.uploadCvInput} {...register('file')} />
                            <button type='submit' disabled={isSending} style={{ cursor: isSending ? "not-allowed" : "pointer" }} className={styles.sendBtn}>
                                {isSending ? 'Sending...' : 'Send Request'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}