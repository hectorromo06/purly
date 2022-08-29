import React from 'react';
import './Login';
import { QUERY_PATTERNS} from '../../src/utils/queries';
import { useQuery } from '@apollo/client';
import PatternList from '../components/PatternList';

function Home() {

    const { loading, data } = useQuery(QUERY_PATTERNS);

    const patterns = data?.patterns || [];

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='home'>
            <PatternList patterns={patterns} />
        </div>
    );
};

export default Home;