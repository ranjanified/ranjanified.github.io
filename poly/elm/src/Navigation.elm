module Navigation exposing (..)

import Html exposing (Html, div)
import Html.Attributes exposing (class, id)

view: model -> Html msg
view _ =
 div [id "poly-navigation", class "poly-navigation"] [] 

main =
 view "Poly Navigation"
