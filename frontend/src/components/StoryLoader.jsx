import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import LoadingStatus from './LoadingStatus';
import StoryGame from './StoryGame';


export default function StoryLoader() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [story, setStory] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() =>{
        loadStory(id)
    }, [id]);

    const loadStory = async (storyId) => {
        setLoading(true);
        setError(null);

        try {
            const path = `/api/story/${storyId}/complete`;


            const response = await axios.get(path);

            if(!response.data){
                throw new Error('Story not found');
            }


            setStory(response.data);
            // setLoading(false);
        } catch (error){
            if(error.response?.status === 404){
                setError('Story not found');
            } else {
                setError('Failed to Load story');
            }
        } finally {
            setLoading(false);
        }
    }

    const createNewStory = () => {
        navigate('/');
    }

    
    if(loading){
        return (
            <LoadingStatus theme={"story"} />
        );
    }

    if(error){
        return (
            <div className="story-loader">
                <div className="error-message">
                    <h2>Story Not Found</h2>
                    <p>{error}</p>
                    <button onClick={createNewStory}>Go to Story Generator </button>
                </div>
            </div>
        );
    }

    if(story){
        return (
            <div className="story-loader">
                <StoryGame story={story} onNewStory={createNewStory} />
            </div>
        );
    }
}
