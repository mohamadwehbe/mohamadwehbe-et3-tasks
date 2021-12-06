import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import et3img from '../et3img.jpg';

export default function BasicTextFields({setRow}) {
    const [id,setId] = useState(1);
    const [date, setDate] = useState('');
    const [platform, setPlatform] = useState('');
    const [se, setSE] = useState('');
    const [version, setVersion] = useState('');
    const [size, setSize] = useState('');
    const [dificulty, setDificulty] = useState('');
    const [status, setStatus] = useState('');
    const [reviewByBY, setReviewByBY] = useState('');
    const [reviewByAH, setReviewByAH] = useState('');
    const [reviewByHT, setReviewByHT] = useState('');
    const [comments, setComments] = useState('');
    const [prlink, setPrlink] = useState('');
    const [added,setAdded] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(added) {
            setDate('')
            setSE('')
            setPlatform('')
            setVersion('')
            setComments('')
            setPrlink('')
            setSize('')
            setDificulty('')
            setStatus('')
            setReviewByBY('')
            setReviewByAH('')
            setReviewByHT('')
            setAdded(false)
        }
    },[added])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleSave = async()=>{
        if(date ==='' || se ==='' || id ==='' || platform ==='' || version ==='' || prlink ==='' || size ==='' || dificulty ===''){
            handleClickOpen();
            return;
        }
        let prevID = id;
        prevID = prevID + 1;
        setId(prevID);
        setRow({date, se, id, platform, version, comments, prlink, size, dificulty, status, reviewByBY, reviewByAH, reviewByHT});
        setAdded(true)
    }

  return (
    <div style={{border:'2px solid #000',borderRadius:5,marginTop:10}}>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{display:'flex', flexDirection:'row', alignItems:'center'}}
        >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          openTo="year"
          views={['year', 'month', 'day']}
          label="Date"
          value={date}
          onChange={(newValue) => {
            setDate(newValue.toString());
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        </LocalizationProvider>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">SE</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={se}
            label="SE"
            onChange={(e)=>setSE(e.target.value)}
            >
            <MenuItem value={'BY'}>BY</MenuItem>
            <MenuItem value={'AH'}>AH</MenuItem>
            <MenuItem value={'HT'}>HT</MenuItem>
            <MenuItem value={'MG'}>MG</MenuItem>
            <MenuItem value={'MW'}>MW</MenuItem>
            <MenuItem value={'AC'}>AC</MenuItem>
            <MenuItem value={'JC'}>JC</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Platform</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={platform}
            label="Platform"
            onChange={(e)=>setPlatform(e.target.value)}
            >
            <MenuItem value={'mobile-client'}>mobile-client</MenuItem>
            <MenuItem value={'kh-server-node'}>kh-server-node</MenuItem>
            <MenuItem value={'kh-sqs-worker'}>kh-sqs-worker</MenuItem>
            <MenuItem value={'kh-server-firebase'}>kh-server-firebase</MenuItem>
            <MenuItem value={'kh-admin-client'}>kh-admin-client</MenuItem>
            <MenuItem value={'kh-admin-server-new'}>kh-admin-server-new</MenuItem>
            <MenuItem value={'kh-admin'}>kh-admin</MenuItem>
            <MenuItem value={'fa-mobile-clent'}>fa-mobile-clent</MenuItem>
            <MenuItem value={'fa-server-firebase'}>fa-server-firebase</MenuItem>
            <MenuItem value={'kh-website'}>kh-website</MenuItem>
            <MenuItem value={'fa-website'}>fa-website</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Release Version</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={version}
            label="Release Version"
            onChange={(e)=>setVersion(e.target.value)}
            >
            <MenuItem value={'8.1.0'}>8.1.0</MenuItem>
            <MenuItem value={'8.1.1'}>8.1.1</MenuItem>
            </Select>
        </FormControl>
        <TextField
            id="outlined-basic"
            label="Comments"
            variant="outlined"
            value={comments}
            onChange={(e)=>setComments(e.target.value)} />
        <TextField
            id="outlined-basic"
            label="PR Link"
            variant="outlined"
            value={prlink}
            onChange={(e)=>setPrlink(e.target.value)} />
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Size"
            onChange={(e)=>setSize(e.target.value)}
            >
            <MenuItem value={'SMALL'}>SMALL</MenuItem>
            <MenuItem value={'MEDIUM'}>MEDIUM</MenuItem>
            <MenuItem value={'LARGE'}>LARGE</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Dificulty</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dificulty}
            label="Dificulty"
            onChange={(e)=>setDificulty(e.target.value)}
            >
            <MenuItem value={'EASY'}>EASY</MenuItem>
            <MenuItem value={'MEDIUM'}>MEDIUM</MenuItem>
            <MenuItem value={'HARD'}>HARD</MenuItem>
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={(e)=>setStatus(e.target.value)}
            >
            <MenuItem value={'Merged'}>Merged</MenuItem>
            <MenuItem value={'Need Review'}>Need Review</MenuItem>
            <MenuItem value={'Closed'}>Closed</MenuItem>
            <MenuItem value={'Has Comments'}>Has Comments</MenuItem>
            </Select>
        </FormControl>
        <FormControl component="fieldset">
            <FormLabel component="legend">Review by BY</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={reviewByBY}
                onChange={e=>setReviewByBY(e.target.value)}
                style={{display:'flex',flexDirection:'row',alignItems:'center'}}
            >
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
            <FormLabel component="legend">Review by Ah</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={reviewByAH}
                onChange={e=>setReviewByAH(e.target.value)}
                style={{display:'flex',flexDirection:'row',alignItems:'center'}}
            >
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
            <FormLabel component="legend">Review by HT</FormLabel>
            <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={reviewByHT}
                onChange={e=>setReviewByHT(e.target.value)}
                style={{display:'flex',flexDirection:'row',alignItems:'center'}}
            >
                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
        </FormControl>
        </Box>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <Button
                variant="contained"
                onClick={handleSave}
                style={{fontWeight:'bold',backgroundColor:'black',marginBottom:10,width:20}}
            >Add</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title"><img src={et3img} alt="img" style={{marginLeft:140,width:'20%'}} /></DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{marginLeft:40,color:'black'}}>
                Please fill in all the required fields
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} style={{color:'black',fontWeight:600}}>
                    Ok
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    </div>
  );
}
