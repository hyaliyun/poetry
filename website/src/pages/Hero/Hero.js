/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Logo from './Logo';

import GridBackground from './GridBackground';
import FloorBackground from './FloorBackground';
import Devices from './Devices';
import styles from './styles.module.css';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.socialLinks}>
        <a
          className="twitter-follow-button"
          href={`https://www.543x.com`}
          data-show-count="false"
          data-size="large">
          Follow @apis
        </a>
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.gridBackground}>
          <GridBackground />
        </div>
        <div className={styles.devices}>
          <Devices />
        </div>
        <div className={styles.floorBackground}>
          <FloorBackground />
        </div>
      </div>
      <div className={styles.content} >
      <Logo />
        <h1 className={styles.title}>天涯</h1>
        <h2 className={styles.subtitle}>海内存知己，天涯若比邻。</h2>
        <div className={styles.buttonContainer}>
          <a href="/google/support" className={styles.primaryButton}>
          开始
          </a>
          <a href="/learn/support" className={styles.secondaryButton}>
          诗文
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
