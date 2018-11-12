import React from 'react';
import * as actionTypes from './actionTypes';
import store from '../store';
import * as actions from './index';
import * as api from '../services/api';
import * as activityActions from "./activity";
import * as utils from "../utils";
import NotificationsPermission from '../components/NotificationsPermission/NotificationsPermission';

export let hasPremium = false;

export function setPremiumState(has) {
  hasPremium = has;
}

export function showSubscriptionRequest() {
  actions.setPopout(<NotificationsPermission
    title="Передумали?"
    caption="Вам нужен Знакомства «Премиум». Вы сможете принять решение заново!"
    type="likes"
    button="Месяц за 99₽"
    onClick={() => {
      actions.loaderShow();
      api.showOrderBox('premium').then(() => {
        actions.loaderSuccess();
        hasPremium = true;
      }).catch((isFailed) => {
        if (isFailed) {
          actions.showError();
        } else {
          actions.loaderHide();
        }
      });
    }}
  />);
}