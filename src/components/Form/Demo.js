import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import Cropper from 'react-easy-crop'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography'
import { withStyles } from '@mui/material/styles'
// import ImgDialog from './ImgDialog'
import getCroppedImg from './cropImage'
// import { styles } from './styles'
import "./Form.css"
const dogImg =
  'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'

export const Demo = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels)
    }, [])
  
    const showCroppedImage = useCallback(async () => {
      try {
        const croppedImage = await getCroppedImg(
          dogImg,
          croppedAreaPixels,
          rotation
        )
        console.log('donee', { croppedImage })
        setOpenDialog(false);
        setCroppedImage(croppedImage)
      } catch (e) {
        console.error(e)
      }
    }, [croppedAreaPixels, rotation])
  
 
    const [openDialog, setOpenDialog] = useState(false);
  
    function handleCloseForm()
    {
      setOpenDialog(false);
    }
    function handleOpenForm()
    {
      setOpenDialog(true);
    }
  
    return (
  <div style={{"marginTop":"50px"}}>
      <Button className='add-btn' variant="outlined" onClick={handleOpenForm}>
      Crop Image
    </Button>
    <Dialog open={openDialog} onClose={handleCloseForm}>
      <DialogContent>
  
      <div style={{"width":"35vw"}}>
        <div className="cropContainer">
          <Cropper
            image={dogImg}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={2.5 / 3}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className="controls">
          <div className="sliderContainer">
            <Typography
              variant="overline"
              // classes={{ root: classes.sliderLabel }}
              className='sliderLabel'
            >
              Zoom
            </Typography>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.01}
              aria-labelledby="Zoom"
              // classes={{ root: classes.slider }}
              className='slider'
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </div>
          <div className="sliderContainer">
            <Typography
              variant="overline"
              // classes={{ root: classes.sliderLabel }}
              className='sliderLabel'
            >
              Rotation
            </Typography>
            <Slider
              value={rotation}
              min={0}
              max={360}
              step={1}
              aria-labelledby="Rotation"
              // classes={{ root: classes.slider }}
              className='slider'
              onChange={(e, rotation) => setRotation(rotation)}
            />
          </div>
        </div>
        {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
      </div>
      </DialogContent>
      <DialogActions>
                <Button variant="contained" onClick={handleCloseForm}>Cancel</Button>
                <Button
            onClick={showCroppedImage}
            variant="contained"
            color="primary"
            // classes={{ root: classes.cropButton }}
        className='cropButton'
          >
            Show Result
          </Button>
              </DialogActions>
      </Dialog>
      
      <img src={croppedImage} />
      </div>
    )
  }
  