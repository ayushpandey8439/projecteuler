%%%-------------------------------------------------------------------
%%% @author ayushpandey
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 04. Sep 2020 4:46 AM
%%%-------------------------------------------------------------------
-module(one).
-author("ayushpandey").

%% API
-export([add/3]).

add(Max,Number,Sum) when Number == Max->
  Sum;
add(Max,Number,Sum) when Number rem 3 ==0 ->
  UpdatedSum = Sum + Number,
  add(Max, Number+1 ,UpdatedSum);
add(Max,Number,Sum) when Number rem 5 ==0 ->
  UpdatedSum = Sum + Number,
  add(Max, Number+1 ,UpdatedSum);
add(Max,Number,Sum) ->
  add(Max, Number+1 ,Sum).

