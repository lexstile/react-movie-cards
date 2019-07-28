// @flow
import axios from 'axios';
import { API_BASE_URL } from './constants';

export const fetchMovies = () => axios.get(`${API_BASE_URL}/api/movies`);

export const fetchRecommendations = () => axios.get(`${API_BASE_URL}/api/recommendations`);

export const fetchData = () => axios.all([fetchMovies(), fetchRecommendations()]);
