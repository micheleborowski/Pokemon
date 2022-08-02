import React from "react";
import { DivTypes, Types, DeleteType } from "../style";

import closeType from "../../../../../assets/closeType.png";

import * as S from "./Style";

export default (type, index, deleteType) => {
  const Color = {
    normal: (
      <S.Normal type={type}>
        <S.TextNormal key={index} type={type}>
          {type}
        </S.TextNormal>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Normal>
    ),
    fighting: (
      <S.Fighting type={type}>
        <S.TextFighting key={index} type={type}>
          {type}
        </S.TextFighting>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Fighting>
    ),
    flying: (
      <S.Flying type={type}>
        <S.TextFlying key={index} type={type}>
          {type}
        </S.TextFlying>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Flying>
    ),
    poison: (
      <S.Poison type={type}>
        <S.TextPoison key={index} type={type}>
          {type}
        </S.TextPoison>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Poison>
    ),
    ground: (
      <S.Ground type={type}>
        <S.TextGround key={index} type={type}>
          {type}
        </S.TextGround>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Ground>
    ),
    rock: (
      <S.Rock type={type}>
        <S.TextRock key={index} type={type}>
          {type}
        </S.TextRock>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Rock>
    ),
    bug: (
      <S.Bug type={type}>
        <S.TextBug key={index} type={type}>
          {type}
        </S.TextBug>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Bug>
    ),
    ghost: (
      <S.Ghost type={type}>
        <S.TextGhost key={index} type={type}>
          {type}
        </S.TextGhost>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Ghost>
    ),
    steel: (
      <S.Steel type={type}>
        <S.TextSteel key={index} type={type}>
          {type}
        </S.TextSteel>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Steel>
    ),
    fire: (
      <S.Fire type={type}>
        <S.TextFire key={index} type={type}>
          {type}
        </S.TextFire>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Fire>
    ),
    water: (
      <S.Water type={type}>
        <S.TextWater key={index} type={type}>
          {type}
        </S.TextWater>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Water>
    ),
    grass: (
      <S.Grass type={type}>
        <S.TextGrass key={index} type={type}>
          {type}
        </S.TextGrass>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Grass>
    ),
    electric: (
      <S.Electric type={type}>
        <S.TextElectric key={index} type={type}>
          {type}
        </S.TextElectric>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Electric>
    ),
    psychic: (
      <S.Psychic type={type}>
        <S.TextPsychic key={index} type={type}>
          {type}
        </S.TextPsychic>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Psychic>
    ),
    ice: (
      <S.Ice type={type}>
        <S.TextIce key={index} type={type}>
          {type}
        </S.TextIce>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Ice>
    ),
    dragon: (
      <S.Dragon type={type}>
        <S.TextDragon key={index} type={type}>
          {type}
        </S.TextDragon>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Dragon>
    ),
    dark: (
      <S.Dark type={type}>
        <S.TextDark key={index} type={type}>
          {type}
        </S.TextDark>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Dark>
    ),
    fairy: (
      <S.Fairy type={type}>
        <S.TextFairy key={index} type={type}>
          {type}
        </S.TextFairy>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </S.Fairy>
    ),
    default: (
      <DivTypes type={type}>
        <Types key={index} type={type}>
          {type}
        </Types>
        <DeleteType
          src={closeType}
          onClick={() => deleteType(index, type)}
        ></DeleteType>
      </DivTypes>
    ),
  };

  return Color[(index, type)] || Color.default;
};
