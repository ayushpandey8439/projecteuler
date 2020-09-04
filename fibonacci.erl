%%%-------------------------------------------------------------------
%%% @author ayushpandey
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 04. Sep 2020 5:03 AM
%%%-------------------------------------------------------------------
-module(fibonacci).
-author("ayushpandey").

%% API
-export([fib/3]).

fib(A,B,Sum) when A+B < 4000000 , (A+B) rem 2==0->
  Next = A+B,
  UpdatedSum = Sum+Next,
  io:format("A::~p   B::~p  SUM::~p  ~n",[A,B,Sum]),
  fib(B,Next,UpdatedSum);
fib(A,B,Sum) when A+B < 4000000->
  Next = A+B,
  io:format("A::~p   B::~p  SUM::~p  ~n",[A,B,Sum]),
  fib(B,Next,Sum);
fib(A,B,Sum) when A+B >= 4000000->
  io:format("A::~p   B::~p  SUM::~p  ~n",[A,B,Sum]),
  Sum.
