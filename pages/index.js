import React from 'react';
import styled from 'styled-components';
import PageContainer from '../components/shared/PageContainer';
import { PreTitle, Title } from '../components/shared/Title';
import MatchId from '../components/matchId';
import Settings from '../components/settings';
import ScoreControl from '../components/scoreControl';
import Footer from '../components/footer';

function ScorePage() {
  return (
    <PageContainer>
      <PreTitle>Volleystream.no</PreTitle>
      <Title>Volley Score</Title>
      <MatchId />
      <Settings />
      <ScoreControl />
      <Footer>Laget av Thor Even Tutturen, NTNUI Volleyball</Footer>
    </PageContainer>
  );
}

export default ScorePage;
