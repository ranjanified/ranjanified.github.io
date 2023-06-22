module Main exposing (..)

import Html exposing (section, text, header, div, img, footer)
import Html.Attributes exposing (class, id, src)
import Navigation

view model =
 section [ id "poly-main"] [
  header [ class "poly-header" ] [
   div [ id "header-title", class "header-title"] [ img [ src "https://polyml.org/images/Title.gif"] []],
   div [ id "header-parrot", class "header-parrot" ] [ img [src "https://polyml.org/images/Poly_Parrot3.gif"] []]
  ],
  -- section [id "poly-navigation", class "poly-navigation"] [],uly
  Navigation.main,
  footer [ id "poly-footer", class "poly-footer" ] [ text "Last updated: 19 May 2021 by David Matthews."]
 ]

main =
 view "poly home page"
