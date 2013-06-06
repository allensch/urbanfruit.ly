Ember.TEMPLATES["profileCreate"] = App.Templates.get("profile-create")
App.ProfileCreateView = Ember.View.extend(
  templateName: "profileCreate"

  didInsertElement: ->
    profileArea = @$("#profile-div")[0]
    profileArea.addEventListener "dragover", @preventDropTarget, false
    profileArea.addEventListener "drop", @preventDropTarget, false
    return

  # Prevent files accidentally dropped outside the drop target
  # from navigating away from the page.
  preventDropTarget: ((evt) ->
    evt.stopPropagation()
    evt.preventDefault()
    return
  )

)