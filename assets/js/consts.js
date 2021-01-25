'use strict';

const REASON_INSTALL                                    = 'install';
const REASON_UPDATE                                     = 'update';

// CONSTS
const STORAGE_KEY_STRIPPING_METHOD_TO_USE               = 'STRIPPING_METHOD_TO_USE';
const STORAGE_KEY_SKIP_KNOWN_REDIRECTS                  = 'SKIP_KNOWN_REDIRECTS';
const STRIPPING_METHOD_HISTORY_CHANGE                   = 1;
const STRIPPING_METHOD_CANCEL_AND_RELOAD                = 2; // DEPRECATED
const STRIPPING_METHOD_BLOCK_AND_RELOAD                 = 3;
const STRIPPING_METHOD_BLOCK_AND_RELOAD_SKIP_REDIRECTS  = 4;

const ACTION_RELOAD_AND_ALLOW_PARAMS                    = 'reload_and_allow_params';
const ACTION_OPTIONS_SAVED                              = 'options_saved';
const ACTION_GET_STUFF_BY_STRIPPING_METHOD_ID           = 'get_stuff_by_stripping_method_id';

// Need to be User-friendly looking as they're use= for display purposes
const CHANGE_TYPE_TRACKING_STRIP                        = 'Tracking Stripped';
const CHANGE_TYPE_REDIRECT_SKIP                         = 'Redirect Skipped';
const CHANGE_TYPE_BEEN_CHECKED                          = 'Been-checked No-op';

const CONTEXT_MENU_COPY_CLEAN_ID                        = 'COPY_AND_CLEAN';
const CONTEXT_MENU_COPY_CLEAN_TEXT                      = 'Copy and Clean Link';
const CONTEXT_MENU_CLEAN_AND_GO_ID                      = 'CLEAN_AND_GO';
const CONTEXT_MENU_CLEAN_AND_GO_TEXT                    = 'Clean and Open in New Tab';

// Default Stripping Method to use when in doubt.
const DEFAULT_STRIPPING_METHOD = STRIPPING_METHOD_BLOCK_AND_RELOAD_SKIP_REDIRECTS;

export {
  REASON_INSTALL                                    ,
  REASON_UPDATE                                     ,

  // CONSTS
  STORAGE_KEY_STRIPPING_METHOD_TO_USE               ,
  STORAGE_KEY_SKIP_KNOWN_REDIRECTS                  ,
  STRIPPING_METHOD_HISTORY_CHANGE                   ,
  STRIPPING_METHOD_CANCEL_AND_RELOAD                , // DEPRECATED
  STRIPPING_METHOD_BLOCK_AND_RELOAD                 ,
  STRIPPING_METHOD_BLOCK_AND_RELOAD_SKIP_REDIRECTS  ,

  ACTION_RELOAD_AND_ALLOW_PARAMS                    ,
  ACTION_OPTIONS_SAVED                              ,
  ACTION_GET_STUFF_BY_STRIPPING_METHOD_ID           ,

  // Need to be User-friendly looking as they're used for display purposes
  CHANGE_TYPE_TRACKING_STRIP                        ,
  CHANGE_TYPE_REDIRECT_SKIP                         ,
  CHANGE_TYPE_BEEN_CHECKED                          ,

  CONTEXT_MENU_COPY_CLEAN_ID                        ,
  CONTEXT_MENU_COPY_CLEAN_TEXT                      ,
  CONTEXT_MENU_CLEAN_AND_GO_ID                      ,
  CONTEXT_MENU_CLEAN_AND_GO_TEXT                    ,

  DEFAULT_STRIPPING_METHOD 
};
