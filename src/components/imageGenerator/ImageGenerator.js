import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Radio,
  RadioGroup,
  Button,
  Box,
} from '@chakra-ui/react';
import './ImageGenerator.css';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('small');
  const [imagesArray, setImagesArray] = useState([]);

  const generateImageRequest = async (prompt, size) => {
    console.log('Inside generateImageRequest');
    console.log('SIZE : ', size);
    console.log('PROMPT : ', prompt);
    try {
      //   showSpinner();

      const response = await fetch(
        'http://localhost:5001/openai/generateimage',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt,
            size,
          }),
        }
      );

      if (!response.ok) {
        // removeSpinner();
        throw new Error('That image could not be generated');
      }

      const data = await response.json();

      const imageUrlData = data.data;

      setImagesArray(imageUrlData);
      console.log(imageUrlData);

      //   removeSpinner();
    } catch (error) {
      console.error('Failed to fetch');
    }
  };

  const handleChangeRadio = (e) => {
    setSize(e.target.value);
    console.log(size);
  };

  const handleChangePrompt = (e) => {
    e.preventDefault();
    setPrompt(e.target.value);
    console.log(prompt);
  };

  console.log(size);
  console.log(prompt);

  return (
    <>
      <div className='image-generator-wrapper'>
        <Box className='form-components-wrapper'>
          <FormControl className='radio-buttons'>
            <RadioGroup>
              <Radio
                defaultChecked={true}
                id='small'
                name='small'
                value={'small'}
                mb={4}
                mr={4}
                colorScheme='green'
                onChange={handleChangeRadio}
              >
                Small
              </Radio>
              <Radio
                id='medium'
                name='medium'
                value={'medium'}
                mb={4}
                mr={4}
                colorScheme='green'
                onChange={handleChangeRadio}
              >
                Medium
              </Radio>
              <Radio
                id='large'
                name='large'
                value={'large'}
                colorScheme='green'
                onChange={handleChangeRadio}
              >
                Large
              </Radio>
            </RadioGroup>
          </FormControl>
          <FormControl className='form-prompt'>
            <Input
              id='prompt'
              value={prompt}
              onChange={handleChangePrompt}
              placeholder={'Describe image you want'}
            />
          </FormControl>

          <Button
            onClick={() => generateImageRequest(prompt, size)}
            className='submit-button'
            type='button'
          >
            Submit
          </Button>
        </Box>

        <ul>
          {imagesArray.map((image) => (
            <li key={image.id}>
              <img src={image.url} alt={image.alt} key={uuidv4()} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ImageGenerator;
