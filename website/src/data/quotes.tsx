/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export const QUOTES = [
  {
    thumbnail: require('./quotes/marketstack.png'),
    name: '登幽州台歌',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '【唐】陈子昂',
      description: '【唐】陈子昂',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
       前不见古人，后不见来者。

念天地之悠悠，独怆然而涕下！
      </Translate>
    ),
    url: 'https://www.543x.com/',
  },
  {
    thumbnail: require('./quotes/positionstack.png'),
    name: '出塞',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '【唐】王昌龄',
      description: '【唐】王昌龄',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
        秦时明月汉时关，万里长征人未还。

但使龙城飞将在，不教胡马度阴山。
      </Translate>
    ),
    url: 'https://www.252x.com/',
  },
  {
    thumbnail: require('./quotes/tax_data.png'),
    name: '登鹳雀楼',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '【唐】王之涣',
      description: 'Tax Data API',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
      白日依山尽，黄河入海流。

欲穷千里目，更上一层楼。
      </Translate>
    ),
    url: 'https://www.494x.com',
  },
];

export default QUOTES;
